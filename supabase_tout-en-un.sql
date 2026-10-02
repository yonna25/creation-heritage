-- INSTALLATION COMPLÈTE (à exécuter UNE SEULE FOIS dans Supabase > SQL Editor > New query).
-- 1) Remplace NOUVELLE_CLE (une seule fois, plus bas) par ta clé admin secrète : 12 caractères minimum.
-- 2) Clique sur Run.

create table if not exists participants(id uuid primary key,name text,data jsonb not null,updated_at timestamptz default now());
alter table participants enable row level security;

-- MISE À JOUR V2. Remplacer NOUVELLE_CLE (1 seule fois, ligne "insert into admin_config") par votre clé admin (12 caractères minimum).
create table if not exists admin_config(id int primary key default 1 check(id=1),key_hash text not null);
create table if not exists settings(key text primary key,value jsonb not null);
alter table admin_config enable row level security;
alter table settings enable row level security;
create index if not exists participants_updated on participants(updated_at desc);
insert into admin_config(id,key_hash) values(1,encode(sha256(convert_to('NOUVELLE_CLE','UTF8')),'hex'))
 on conflict(id) do update set key_hash=excluded.key_hash;

create or replace function check_admin(p_key text) returns void language plpgsql security definer set search_path=public as $$
begin
 if not exists(select 1 from admin_config where key_hash=encode(sha256(convert_to(coalesce(p_key,''),'UTF8')),'hex')) then
  perform pg_sleep(1); raise exception 'denied';
 end if;
end $$;
revoke all on function check_admin(text) from public,anon,authenticated;

drop function if exists admin_list(text);
create or replace function upsert_participant(p_id uuid,p_name text,p_data jsonb) returns void language plpgsql security definer set search_path=public as $$
begin
 if length(p_data::text)>30000 then raise exception 'too large'; end if;
 insert into participants(id,name,data,updated_at) values(p_id,left(coalesce(p_name,''),60),p_data,now())
 on conflict(id) do update set name=excluded.name,data=excluded.data,updated_at=now();
end $$;

create or replace function admin_list(p_key text,p_limit int default 50,p_offset int default 0,p_q text default '')
returns table(id uuid,name text,data jsonb,updated_at timestamptz,total bigint) language plpgsql security definer set search_path=public as $$
begin
 perform check_admin(p_key);
 return query select p.id,p.name,p.data,p.updated_at,count(*) over() from participants p
  where p_q='' or p.name ilike '%'||p_q||'%' order by p.updated_at desc limit least(p_limit,1000) offset p_offset;
end $$;

create or replace function admin_stats(p_key text) returns jsonb language plpgsql security definer set search_path=public as $$
declare r jsonb;
begin
 perform check_admin(p_key);
 select jsonb_build_object(
  'total',(select count(*) from participants),
  'levels',coalesce((select jsonb_object_agg(x.l,x.c) from (select k as l,count(*) c from participants,jsonb_object_keys(coalesce(data->'done','{}'::jsonb)) k group by k) x),'{}'::jsonb),
  'picks',coalesce((select jsonb_agg(jsonb_build_object('l',y.l,'q',y.q-1,'a',y.a,'n',y.n)) from
    (select e.key l,t.ord q,t.v a,count(*) n from participants,jsonb_each(coalesce(data->'p','{}'::jsonb)) e,
     jsonb_array_elements_text(case when jsonb_typeof(e.value->'qa')='array' then e.value->'qa' else '[]'::jsonb end) with ordinality t(v,ord) group by 1,2,3) y),'[]'::jsonb))
 into r;
 return r;
end $$;

create or replace function get_groups() returns jsonb language sql security definer set search_path=public as $$
 select coalesce((select value from settings where key='groups'),'{}'::jsonb) $$;

create or replace function admin_set_groups(p_key text,p_groups jsonb) returns void language plpgsql security definer set search_path=public as $$
begin
 perform check_admin(p_key);
 insert into settings(key,value) values('groups',p_groups) on conflict(key) do update set value=excluded.value;
end $$;

create or replace function admin_change_key(p_key text,p_new text) returns void language plpgsql security definer set search_path=public as $$
begin
 perform check_admin(p_key);
 if length(coalesce(p_new,''))<12 then raise exception 'too short'; end if;
 update admin_config set key_hash=encode(sha256(convert_to(p_new,'UTF8')),'hex') where id=1;
end $$;

grant execute on function upsert_participant(uuid,text,jsonb),admin_list(text,int,int,text),admin_stats(text),get_groups(),admin_set_groups(text,jsonb),admin_change_key(text,text) to anon;

-- RÉCUPÉRER UNE CLÉ ADMIN PERDUE : connectez-vous à Supabase (vous en êtes propriétaire) > SQL Editor, puis exécutez :
-- update admin_config set key_hash=encode(sha256(convert_to('MA_NOUVELLE_CLE','UTF8')),'hex');


-- MISE À JOUR V3 (modules et niveaux gérés depuis l'admin). À exécuter une fois dans Supabase > SQL Editor.
create or replace function get_catalog() returns jsonb language sql security definer set search_path=public as $$
 select coalesce((select value from settings where key='catalog'),'{}'::jsonb) $$;

create or replace function admin_set_catalog(p_key text,p_catalog jsonb) returns void language plpgsql security definer set search_path=public as $$
begin
 perform check_admin(p_key);
 if length(p_catalog::text)>400000 then raise exception 'too large'; end if;
 insert into settings(key,value) values('catalog',p_catalog) on conflict(key) do update set value=excluded.value;
end $$;

grant execute on function get_catalog(), admin_set_catalog(text,jsonb) to anon;

-- Rafraîchit la liste des fonctions pour l'application (obligatoire).
notify pgrst, 'reload schema';

-- À exécuter dans Supabase > SQL Editor. Remplacer CHANGE_MOI par votre clé admin secrète.
create table if not exists participants(id uuid primary key,name text,data jsonb not null,updated_at timestamptz default now());
alter table participants enable row level security;  -- aucune policy : lecture/écriture directe interdites

create or replace function upsert_participant(p_id uuid,p_name text,p_data jsonb) returns void
language sql security definer set search_path=public as $$
 insert into participants(id,name,data,updated_at) values(p_id,left(coalesce(p_name,''),60),p_data,now())
 on conflict(id) do update set name=excluded.name,data=excluded.data,updated_at=now();
$$;

create or replace function admin_list(p_key text) returns setof participants
language plpgsql security definer set search_path=public as $$
begin
 if p_key is distinct from 'CHANGE_MOI' then raise exception 'denied'; end if;
 return query select * from participants order by updated_at desc;
end $$;

grant execute on function upsert_participant(uuid,text,jsonb) to anon;
grant execute on function admin_list(text) to anon;

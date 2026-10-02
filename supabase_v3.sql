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

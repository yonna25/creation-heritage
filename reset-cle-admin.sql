-- RÉINITIALISER LA CLÉ ADMIN : Supabase > SQL Editor. Remplace MA_NOUVELLE_CLE (12 caractères minimum), puis « Run ».
insert into admin_config(id,key_hash) values(1,encode(extensions.digest('MA_NOUVELLE_CLE','sha256'),'hex'))
 on conflict(id) do update set key_hash=excluded.key_hash;

-- RÉINITIALISER LA CLÉ ADMIN : Supabase > SQL Editor. Remplace MA_NOUVELLE_CLE (12 caractères minimum), puis « Run ».
insert into admin_config(id,key_hash) values(1,encode(sha256(convert_to('MA_NOUVELLE_CLE','UTF8')),'hex'))
 on conflict(id) do update set key_hash=excluded.key_hash;

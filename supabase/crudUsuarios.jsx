import { supabase } from "./supabase.config";
const tabla = "users";
export async function MostrarUsuarios(p) {
  const { data } = await supabase.from(tabla).select().eq("id_auth", p.id_auth);
  return data;
}
export async function InsertarUsuario(p) {
  const { data } = await supabase.from(tabla).insert(p).select();
  return data;
}

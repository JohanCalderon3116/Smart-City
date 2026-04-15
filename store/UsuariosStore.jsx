import { create } from "zustand";
import {
  InsertarUsuario,
  MostrarUsuarios,
  ObtenerIdAuthSupabase,
} from "../supabase/crudUsuarios";

export const useUsuariosStore = create((set) => ({
  datausuarios: [],
  mostrarusuarios: async () => {
    const response = await MostrarUsuarios({id_auth: "580d71a9-4589-4d53-9eaf-39ba217e3e2c"});
    set({ datausuarios: response });
    return response;
  },
  insertarUsuarios: async (p) => {
    await InsertarUsuario(p);
  },
}));

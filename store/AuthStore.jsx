import { create } from "zustand";
import { makeRedirectUri } from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { supabase } from "../supabase/supabase.config";

WebBrowser.maybeCompleteAuthSession();

export const useAuthStore = create((set) => ({
  user: null,
  loginGoogle: async () => {
    const redirectTo = makeRedirectUri({ scheme: "smartcity" });

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
        skipBrowserRedirect: true,
      },
    });
    if (error || !data?.url) return;

    const result = await WebBrowser.openAuthSessionAsync(data.url, redirectTo);

    if (result.type === "success" && result.url) {
      const url = new URL(result.url);
      const code = url.searchParams.get("code");
      if (code) {
        const { data: session } =
          await supabase.auth.exchangeCodeForSession(code);
        set({ user: session?.user ?? null });
      }
    }
  },

  logoutGoogle: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error al cerrar sesión:", error.message);
    } else {
      set({ user: null });
      console.log("Sesión cerrada exitosamente en Supabase");
    }
  },
}));

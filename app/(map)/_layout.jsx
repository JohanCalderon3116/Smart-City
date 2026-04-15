import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useThemeStore } from "../../store/ThemeStore";
import { ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { MaterialIcons } from "@expo/vector-icons";
export default function Layout() {
  const queryClient = new QueryClient();
  const { themeStyle } = useThemeStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeStyle}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={({ route }) => ({
              drawerActiveTintColor: "tomato",
              drawerInactiveTintColor: "gray",
              drawerLabelStyle: {
                fontSize: 18,
                marginLeft: 0,
              },
              drawerIcon: () => {
                let iconname;
                if (route.name === "index") {
                  iconname = "home";
                }
                if (route.name === "(mapa)") {
                  iconname = "map";
                }
                if (route.name === "(reportar)") {
                  iconname = "report";
                }
                if (route.name === "(miperfil)") {
                  iconname = "face-retouching-natural";
                }
                if (route.name === "(cerrar)") {
                  iconname = "logout";
                }
                return (
                  <MaterialIcons name={iconname} size={20}></MaterialIcons>
                );
              },
            })}
          >
            <Drawer.Screen
              name="index"
              options={{
                drawerLabel: "Inicio",
                title: "Menú",
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name="(mapa)"
              options={{
                title: "Mapa",
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name="(reportar)"
              options={{
                title: "Hacer reporte...",
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name="(miperfil)"
              options={{
                title: "Mi perfil",
              }}
            ></Drawer.Screen>
            <Drawer.Screen
              name="(cerrar)"
              options={{
                title: "Cerrar sesión",
              }}
            ></Drawer.Screen>
          </Drawer>
        </GestureHandlerRootView>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

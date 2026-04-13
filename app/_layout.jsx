import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { useThemeStore } from "../store/ThemeStore";
import { ThemeProvider } from "styled-components/native";

export default function Layout() {
  const queryClient = new QueryClient();
  const { themeStyle } = useThemeStore();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeStyle}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

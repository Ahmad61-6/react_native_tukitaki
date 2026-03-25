import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { StatusBar } from "react-native";
import "./global.css";

SplashScreen.preventAutoHideAsync();
const isLoggesIn = false;

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Regular": require("../assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("../assets/fonts/OpenSans-SemiBold.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Protected guard={!isLoggesIn}>
          <Stack.Screen name="(auth)" options={{}} />
        </Stack.Protected>
        <Stack.Protected guard={isLoggesIn}>
          <Stack.Screen name="(protected)" options={{}} />
        </Stack.Protected>
      </Stack>
    </>
  );
}

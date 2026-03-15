import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
  return (
    <>
      <StatusBar value="auto" />

      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Sticker Smash", headerLeft: () => <></> }}
        />
        <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      </Stack>
    </>
  );
}

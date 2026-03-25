import { Redirect, Stack } from "expo-router";
import { useAuth } from "../../hooks/useAuth";

const ProtectedLayout = () => {
  const { isReady, isLoggedIn } = useAuth();

  if (!isReady) {
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/signin" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
};

export default ProtectedLayout;

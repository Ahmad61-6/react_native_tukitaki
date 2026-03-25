import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";

const SigninScreen = () => {
  const insets = useSafeAreaInsets();
  const { login } = useAuth();
  return (
    <View
      className="flex-1 items-center justify-center px-5"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text className="font-bold text-primary-bg text-6xl ">SigninScreen</Text>
      <TouchableOpacity
        className="mt-10 bg-primary-bg px-10 py-4 rounded-md items-center justify-center w-full"
        onPress={() => login("testuser", "password123")}
      >
        <Text className="text-colorWhite font-bold text-lg">Go to Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

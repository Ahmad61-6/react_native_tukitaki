import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SigninScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-1 items-center justify-center px-5"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text className="font-bold text-primary-bg text-6xl ">SigninScreen</Text>
      <Link href="/signup" asChild>
        <TouchableOpacity className="mt-10 bg-primary-bg px-10 py-4 rounded-md items-center justify-center w-full">
          <Text className="text-colorWhite font-bold text-lg">
            Go to Sign Up
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default SigninScreen;

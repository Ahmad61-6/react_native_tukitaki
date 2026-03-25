import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignupScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-1 items-center justify-center"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Text className="font-bold text-primary-bg text-6xl">SignupScreen</Text>
    </View>
  );
};

export default SignupScreen;

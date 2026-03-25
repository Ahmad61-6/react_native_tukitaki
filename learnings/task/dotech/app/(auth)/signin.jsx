import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";

// ✅ Import your AuthFields and your icons object!
import icons from "@/constants/icons";
import AuthFields from "../../components/AuthFields";

const SigninScreen = () => {
  const insets = useSafeAreaInsets();
  const { login } = useAuth();

  const [username, setUsername] = useState("shl0145");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  return (
    <View
      className="flex-1 px-6 justify-center"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#0F172A",
      }}
    >
      <View className="w-full">
        <AuthFields
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          leadingIcon={icons.personIcon}
        />

        {/* Password Field */}
        <AuthFields
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          leadingIcon={icons.passwrodLeading}
          secureTextEntry
        />

        {/* Remember Me & Help Row */}
        <View className="flex-row items-center justify-between w-full mt-2 mb-8">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => setRememberMe(!rememberMe)}
            activeOpacity={0.7}
          >
            <View
              className={`w-5 h-5 rounded flex items-center justify-center border ${
                rememberMe
                  ? "bg-[#2A3449] border-[#2A3449]"
                  : "border-[#475569]"
              }`}
            >
              {rememberMe && <Feather name="check" size={14} color="white" />}
            </View>

            <Text className="text-white font-bold ml-3 text-sm">
              Remember username
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="help-circle" size={18} color="#94A3B8" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="bg-white py-4 rounded-xl items-center w-full"
          onPress={() => login(username, password)}
          activeOpacity={0.8}
        >
          <Text className="font-bold text-lg text-black">Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninScreen;

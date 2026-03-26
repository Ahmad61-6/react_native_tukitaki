import icons from "@/constants/icons";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";

import AuthFields from "../../components/AuthFields";
import ErrorSnackbar from "../../components/ErrorSnackbar";

const SigninScreen = () => {
  const insets = useSafeAreaInsets();
  const { login } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSignIn = async () => {
    Keyboard.dismiss();
    let isValid = true;
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      setIsLoading(true);
      setToastMessage(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        await login(username, password);
      } catch (error) {
        setIsLoading(false);
        setToastMessage(
          error?.message ||
            "Invalid credentials. Please check your username and password.",
        );
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        className="flex-1 justify-center px-6 bg-primary-bg relative overflow-hidden"
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        <ErrorSnackbar
          message={toastMessage}
          visible={!!toastMessage}
          onDismiss={() => setToastMessage(null)}
        />

        <View className="w-full">
          <AuthFields
            placeholder="Username"
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              if (errors.username) setErrors({ ...errors, username: null });
            }}
            leadingIcon={icons.personIcon}
            error={errors.username}
          />

          <AuthFields
            placeholder="Password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password) setErrors({ ...errors, password: null });
            }}
            leadingIcon={icons.passwrodLeading}
            secureTextEntry
            error={errors.password}
          />

          <View className="flex-row items-center justify-between w-full mt-2 mb-8">
            <TouchableOpacity
              className="flex-row items-center"
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.7}
            >
              <View
                className={`w-5 h-5 rounded flex items-center justify-center border ${
                  rememberMe ? "bg-card" : "border-[#475569]"
                }`}
              >
                {rememberMe && <Feather name="check" size={14} color="white" />}
              </View>
              <Text className="text-primary-light font-bold ml-3 text-sm">
                Remember username
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Feather name="help-circle" size={18} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className={`py-5 rounded-sm items-center w-full ${
              isLoading ? "bg-primary-light/70" : "bg-primary-light"
            }`}
            onPress={handleSignIn}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#0F172A" size="large" />
            ) : (
              <Text className="font-bold text-lg text-black">Sign in</Text>
            )}
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-40 left-4 right-0 flex-row justify-center w-full">
          <Text className="text-primary-light text-sm">
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text className="text-primary-light font-bold text-sm">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SigninScreen;

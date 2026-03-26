import icons from "@/constants/icons";
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

const SignupScreen = () => {
  const insets = useSafeAreaInsets();
  const { register } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSignUp = async () => {
    Keyboard.dismiss();
    let isValid = true;
    let newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
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

        const result = register(username, email, password);

        if (!result.success) {
          setIsLoading(false);
          setToastMessage(
            result.message || "Registration failed. Please try again.",
          );
        }
      } catch (error) {
        setIsLoading(false);
        setToastMessage("Something went wrong. Please try again.");
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
            placeholder="Email Address"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            leadingIcon={icons.personIcon}
            error={errors.email}
            keyboardType="email-address"
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

          <TouchableOpacity
            className={`h-[60px] justify-center mt-6 rounded-sm items-center w-full ${
              isLoading ? "bg-primary-light/70" : "bg-primary-light"
            }`}
            onPress={handleSignUp}
            activeOpacity={0.8}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#0F172A" size="large" />
            ) : (
              <Text className="font-bold text-lg text-black">Sign up</Text>
            )}
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-40 left-4 right-0 flex-row justify-center w-full">
          <Text className="text-primary-light text-sm">
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => router.replace("/signin")}>
            <Text className="text-primary-light font-bold text-sm">
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignupScreen;

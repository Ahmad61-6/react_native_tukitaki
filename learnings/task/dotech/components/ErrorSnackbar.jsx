import { Feather } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ErrorSnackbar = ({ message, visible, onDismiss }) => {
  const insets = useSafeAreaInsets();

  const translateY = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: insets.top + 10,
        useNativeDriver: true,
        speed: 12,
        bounciness: 8,
      }).start();

      const timer = setTimeout(() => {
        onDismiss();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(translateY, {
        toValue: -100,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Animated.View
      style={{
        transform: [{ translateY }],
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        paddingHorizontal: 20,
      }}
    >
      <View className="flex-row items-center bg-itemGradient-start rounded-xl px-4 py-4 shadow-lg border border-[#B91C1C]">
        <Feather name="alert-circle" size={20} color="white" />

        <Text className="text-primary-light font-bold ml-3 flex-1 text-sm">
          {message}
        </Text>

        <TouchableOpacity onPress={onDismiss} activeOpacity={0.7}>
          <Feather name="x" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default ErrorSnackbar;

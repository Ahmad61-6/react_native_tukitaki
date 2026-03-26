import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const AuthFields = ({
  placeholder,
  leadingIcon,
  value,
  onChangeText,
  secureTextEntry,
  error,
  keyboardType = "default",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className="mb-4 w-full">
      <View
        className={`flex-row items-center w-full bg-card border rounded-xl px-4 py-3 ${
          error
            ? "border-itemGradient-start"
            : isFocused
              ? "border-primary-light"
              : "border-card-2"
        }`}
      >
        {leadingIcon && (
          <Image
            source={leadingIcon}
            className="w-5 h-5 mr-3"
            resizeMode="contain"
            style={{
              tintColor: error ? "#EA0E2E" : isFocused ? "#FFFFFF" : "#CDCDCD",
            }}
          />
        )}

        <TextInput
          className="flex-1 text-primary-light text-base font-semibold"
          placeholder={placeholder}
          placeholderTextColor="#CDCDCD"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          autoCapitalize="none"
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={20}
              color={error ? "#EF4444" : "#CDCDCD"}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text className="text-itemGradient-start text-xs font-bold mt-1 ml-1">
          {error}
        </Text>
      )}
    </View>
  );
};

export default AuthFields;

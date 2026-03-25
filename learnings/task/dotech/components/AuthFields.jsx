import { Image, TextInput, View } from "react-native";

const AuthFields = ({
  placeholder,
  leadingIcon,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  return (
    <View className="flex-row items-center w-full bg-card border border-card-2 rounded-xl px-4 py-4 mb-4">
      {leadingIcon && (
        <Image
          source={leadingIcon}
          className="w-5 h-5 mr-3"
          resizeMode="contain"
          style={{ tintColor: "#CDCDCD" }}
        />
      )}

      <TextInput
        className="flex-1 text-white text-base font-semibold"
        placeholder={placeholder}
        placeholderTextColor="#CDCDCD"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

export default AuthFields;

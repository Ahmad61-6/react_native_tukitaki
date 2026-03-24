import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({ onFocus, placeholder, value, onChangeText }) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
        editable={true}
        onFocus={onFocus}
      />
    </View>
  );
};

export default SearchBar;

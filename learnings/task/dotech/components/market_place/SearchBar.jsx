import icons from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

export default function SearchBar({ placeholder, onFocus }) {
  return (
    <View className="flex-row items-center bg-colorWhite rounded-xl px-4 py-3 shadow-sm mt-5 mb-2">
      <Image source={icons.search} className="w-7 h-7 mb-1" color="#034A8F" />
      <TextInput
        className="flex-1 ml-3 text-textDeepGray font-semibold text-sm"
        placeholder={placeholder}
        placeholderTextColor="#A5A5A5"
        onFocus={onFocus}
      />
    </View>
  );
}

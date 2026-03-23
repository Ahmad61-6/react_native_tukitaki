import { icons } from "@/constants/icons";
import { useState } from "react";
import { Image, TextInput, View } from "react-native";

const SearchBar = ({ onFocus, placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");

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
        value={searchQuery}
        onChangeText={setSearchQuery}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
        editable={true}
        onFocus={onFocus}
      />
    </View>
  );
};

export default SearchBar;

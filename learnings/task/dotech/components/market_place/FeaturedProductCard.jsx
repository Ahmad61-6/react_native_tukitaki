import { Feather } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FeaturedProductCard({ title, imagePath }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="bg-primary-light rounded-xl p-2 mb-4"
      style={{ width: "31%" }}
    >
      <View className="bg-colorWhite rounded-xl w-full aspect-square items-center justify-center mb-2">
        <Image source={imagePath} className="" resizeMode="contain" />
      </View>

      <View className="flex-row items-end justify-between px-1">
        <Text
          className="text-textDeepGray font-semibold text-[10px] flex-1 leading-tight"
          numberOfLines={2}
        >
          {title}
        </Text>
        <Feather name="chevron-right" size={20} color="#034A8F" />
      </View>
    </TouchableOpacity>
  );
}

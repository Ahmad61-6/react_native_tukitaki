import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function CategoryItem({ title, imagePath }) {
  return (
    <TouchableOpacity className="items-center w-[23%] mt-2" activeOpacity={0.8}>
      <LinearGradient
        colors={["#EA0E2E", "#0562C3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ padding: 1.5, borderRadius: 14 }}
        className="w-full aspect-[3/4.5]"
      >
        <View className="flex-1 bg-colorWhite rounded-[12px] items-center justify-center pt-3 pb-2 px-1">
          <View className="bg-primary-light w-[54px] h-[54px] rounded-full items-center justify-center mb-2">
            <Image
              source={imagePath}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </View>

          <Text
            className="text-primary-new font-semibold text-base text-center leading-[14px]"
            numberOfLines={2}
          >
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

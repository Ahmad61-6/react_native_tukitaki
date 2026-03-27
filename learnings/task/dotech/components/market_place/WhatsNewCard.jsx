import { Image, TouchableOpacity } from "react-native";

export default function WhatsNewCard({ imagePath }) {
  return (
    <TouchableOpacity activeOpacity={0.9} className="mr-4">
      <Image
        source={imagePath}
        className="w-[300px] h-[150px] rounded-xl"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

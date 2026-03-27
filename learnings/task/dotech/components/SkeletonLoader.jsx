import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SkeletonLoaderSimple = () => {
  const insets = useSafeAreaInsets();

  const SkeletonBox = ({ className }) => (
    <View className={`bg-gray-300 rounded-lg ${className}`} />
  );

  return (
    <View className="flex-1 bg-colorWhite">
      <View
        className="bg-primary-bg relative overflow-hidden"
        style={{ paddingTop: insets.top + 20, paddingBottom: 10 }}
      >
        <View className="px-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <SkeletonBox className="w-14 h-14 rounded-full" />
              <SkeletonBox className="w-24 h-6 ml-3 rounded" />
            </View>
            <View className="flex-row items-center gap-4">
              <SkeletonBox className="w-6 h-6 rounded-full" />
              <SkeletonBox className="w-6 h-6 rounded-full" />
              <SkeletonBox className="w-6 h-6 rounded-full" />
            </View>
          </View>

          <SkeletonBox className="w-full h-12 rounded-xl mt-4" />

          <View className="flex-row items-center justify-between mt-3 mb-2">
            <SkeletonBox className="flex-1 h-16 rounded-lg" />
            <SkeletonBox className="w-24 h-20 ml-2 rounded-lg" />
          </View>
        </View>
      </View>

      <View className="flex-row justify-between px-5 mt-6">
        {[1, 2, 3, 4].map((item) => (
          <View key={item} className="items-center">
            <SkeletonBox className="w-16 h-16 rounded-full" />
            <SkeletonBox className="w-12 h-4 mt-2 rounded" />
          </View>
        ))}
      </View>

      <View className="mt-6">
        <View className="px-5 mb-3">
          <SkeletonBox className="w-32 h-6 rounded" />
        </View>
        <View className="flex-row px-5">
          {[1, 2, 3].map((item) => (
            <View key={item} className="mr-4">
              <SkeletonBox className="w-64 h-32 rounded-lg" />
            </View>
          ))}
        </View>
      </View>

      <View className="mt-6">
        <View className="px-5 mb-3">
          <SkeletonBox className="w-40 h-6 rounded" />
        </View>
        <View className="px-5">
          <View className="flex-row flex-wrap justify-between">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} className="w-[31%] mb-4">
                <SkeletonBox className="w-full h-32 rounded-lg" />
                <SkeletonBox className="w-full h-8 mt-2 rounded" />
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SkeletonLoaderSimple;

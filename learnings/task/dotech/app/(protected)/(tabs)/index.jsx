import { Feather } from "@expo/vector-icons";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import FeaturedProductCard from "@/components//market_place/FeaturedProductCard";
import SearchBar from "@/components//market_place/SearchBar";
import WhatsNewCard from "@/components//market_place/WhatsNewCard";
import CategoryItem from "@/components/market_place/CategoryItem";
import images from "@/constants/images";
import SkeletonLoader from "../../../components/SkeletonLoader";
import { useAuth } from "../../../hooks/useAuth";
import { useMarketplace } from "../../../hooks/useMarketplace";

export default function Index() {
  const insets = useSafeAreaInsets();
  const { user } = useAuth();

  const { marketplaceData, isMarketplaceLoading, marketplaceError } =
    useMarketplace();

  if (isMarketplaceLoading) {
    return <SkeletonLoader />;
  }

  if (marketplaceError) {
    return (
      <View className="flex-1 bg-colorWhite items-center justify-center">
        <Text className="text-red-500 font-bold">
          Error loading marketplace
        </Text>
      </View>
    );
  }

  const ListHeader = () => (
    <View className="bg-colorWhite pb-2">
      <View
        className="bg-primary-bg   relative overflow-hidden"
        style={{ paddingTop: insets.top + 20, paddingBottom: 10 }}
      >
        <Image
          source={images.homeAppBarBg}
          className="absolute w-full z-0"
          pointerEvents="none"
        />
        <View className="px-5">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image
                source={images.person}
                className="w-14 h-14 rounded-full bg-orange-300"
              />
              <Text className="text-colorWhite font-semibold ml-3 text-lg">
                {user?.username || "Guest"}
              </Text>
            </View>

            <View className="flex-row items-center gap-4">
              <TouchableOpacity>
                <Feather name="bell" size={22} color="white" />
              </TouchableOpacity>

              <TouchableOpacity className="relative">
                <Feather name="shopping-cart" size={22} color="white" />
                <View className="absolute -top-1 -right-1 bg-itemGradient-start w-4 h-4 rounded-full items-center justify-center border border-primary-bg">
                  <Text className="text-white text-[9px] font-bold">1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <Feather name="grid" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          <SearchBar placeholder="Search Products" />

          <View className="flex-row items-center justify-between mt-3 mb-2">
            <Text className="text-colorWhite font-semibold  leading-snug flex-1 text-lg">
              Unlock Peak Performance with the perfect Lubricant Oils
            </Text>
            <Image
              source={images.oilImage}
              className="w-30 h-20 ml-2"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View className="flex-row justify-between px-5 mt-6">
        {marketplaceData?.categories?.map((item, index) => (
          <CategoryItem
            key={item.id}
            title={item.title}
            imagePath={item.imagePath}
          />
        ))}
      </View>

      <View className="mt-6">
        <Text className="text-textDeepGray font-bold text-xl px-5 mb-3">
          What's New
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={marketplaceData?.promoBanners}
          renderItem={({ item }) => <WhatsNewCard imagePath={item} />}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        />
      </View>

      <Text className="text-textDeepGray font-bold text-xl px-5 mt-6 mb-3">
        Featured Products
      </Text>
    </View>
  );

  return (
    <View className="flex-1 bg-colorWhite">
      <FlatList
        data={marketplaceData?.featuredProducts}
        renderItem={({ item }) => (
          <FeaturedProductCard title={item.title} imagePath={item.imagePath} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={<ListHeader />}
        contentContainerStyle={{
          paddingBottom: 120,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

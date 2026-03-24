import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCard";

import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { images } from "constants/images";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const { data, loading, error } = useFetch(() =>
    fetchMovies({
      query: "",
    }),
  );

  return (
    <View className="flex-1 bg-primary ">
      <Image
        source={images.bg}
        className="absolute w-full z-0 "
        pointerEvents="none"
      />
      {loading || trendingLoading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center justify-center items-center"
        />
      ) : error || trendingError ? (
        <ScrollView className="flex-1 px-5">
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            Error: {error?.message || trendingError?.message}
          </Text>
        </ScrollView>
      ) : (
        <FlatList
          className="px-4"
          data={data}
          renderItem={({ item }) => <MovieCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          ListHeaderComponent={
            <View className="mb-5">
              <Image
                source={icons.logo}
                className="w-12 h-10 mt-20 mb-5 mx-auto"
              />
              <SearchBar
                onFocus={() => router.push("/search")}
                placeholder="Search for a movie"
              />
              {trendingMovies && (
                <View className="mt-8">
                  <Text className="text-lg text-white font-bold mb-3">
                    Trending Movies
                  </Text>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View className="w-4" />}
                    className="mb-4 mt-3"
                    data={trendingMovies}
                    renderItem={({ item, index }) => (
                      <TrendingCard {...item} index={index} />
                    )}
                    keyExtractor={(item) => item.movie_id.toString()}
                  />
                </View>
              )}
              <Text className="text-lg text-white font-bold ">
                Latest movies
              </Text>
            </View>
          }
          contentContainerStyle={{
            paddingBottom: 10,
          }}
          columnWrapperStyle={{
            justifyContent: "flex-start",
            gap: 20,
            paddingRight: 5,
            marginBottom: 10,
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";

import { icons } from "@/constants/icons";
import { fetchMovies } from "@/services/api";
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
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#0000ff"
          className="mt-10 self-center"
        />
      ) : error ? (
        <ScrollView className="flex-1 px-5">
          <Text className="text-lg text-white font-bold mt-5 mb-3">
            {error?.message}
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

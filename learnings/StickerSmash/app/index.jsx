import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>hello Expo</Text>
      <Link
        href={"/about"}
        style={{
          marginVertical: 10,
          borderBottomWidth: 5,
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Go to about Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: "white",
  },
});

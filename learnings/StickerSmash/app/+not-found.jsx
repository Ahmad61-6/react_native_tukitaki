import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Opps!..Not found screen" }} />
      <View style={styles.container}>
        <Link href={"/"} style={styles.button}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  button: {
    marginVertical: 10,
    borderBottomWidth: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

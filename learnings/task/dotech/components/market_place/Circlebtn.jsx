import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import SvgComponent from "./SvgIcon";

const Circlebtn = ({ ...props }) => {
  const iconSize = 55;
  return (
    <View style={styles.container} pointerEvents="box-none">
      <SvgComponent color="#EDF6FF" style={styles.bg} />
      <Pressable style={styles.button} onPress={() => alert("pressed")}>
        <Ionicons style={styles.btnIcon} name="add"></Ionicons>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 75,
    alignItems: "center",
  },
  bg: {
    position: "absolute",
    top: 0,
    backgroundColor: "transparent",
  },
  button: {
    backgroundColor: "#069",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -25,
    elevation: 5,
  },
  btnIcon: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Circlebtn;

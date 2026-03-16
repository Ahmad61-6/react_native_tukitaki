import { Image } from "expo-image";
import { StyleSheet } from "react-native";

export default function ImageViewer({ imgSource }) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    height: 440,
    width: 320,
    borderRadius: 18,
  },
});

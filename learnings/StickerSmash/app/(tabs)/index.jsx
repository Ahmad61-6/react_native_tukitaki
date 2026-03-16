import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import CircleButton from "../../components/CircleButton";
import EmojiList from "../../components/EmojiList";
import EmojiPicker from "../../components/EmojiPicker";
import EmojiSticker from "../../components/EmojiSticker";
import IconButton from "../../components/IconButton";
import ImageViewer from "../../components/ImageViewer";
import MyButton from "../../components/MyButton";

const PlaceHolderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState(undefined);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("you did not select any image");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(PlaceHolderImage);
  };

  const onModalClosed = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage || PlaceHolderImage} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <MyButton
            label={"Choose a photo"}
            theme="primary"
            onPress={pickImageAsync}
          ></MyButton>
          <MyButton
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          ></MyButton>
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClosed}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClosed} />
      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

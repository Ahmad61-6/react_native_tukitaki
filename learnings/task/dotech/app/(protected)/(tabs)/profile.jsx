import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <View className="flex-1 justify-center items-center px-4">
      <TouchableOpacity
        onPress={logout}
        className="bg-primary-new items-center px-4 py-4 rounded-xl w-full"
      >
        <Text className="text-white font-bold text-colorWhite">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

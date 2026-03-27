import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { profileOptions } from "../../../constants/data";
import { useAuth } from "../../../hooks/useAuth";

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
  };

  return (
    <View
      className="flex-1 bg-colorWhite"
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    >
      <View className="items-center py-8 px-5 border-b border-level-light">
        <View className="relative mb-4">
          <View className="w-24 h-24 rounded-full bg-primary-light items-center justify-center overflow-hidden">
            {user?.avatar ? (
              <Image
                source={{ uri: user.avatar }}
                className="w-full h-full"
                resizeMode="cover"
              />
            ) : (
              <Feather name="user" size={48} color="#034A8F" />
            )}
          </View>
          <TouchableOpacity
            className="absolute bottom-0 right-0 bg-primary-new rounded-full p-2 border-2 border-colorWhite"
            onPress={() => {
              console.log("Change profile picture");
            }}
          >
            <Feather name="camera" size={14} color="white" />
          </TouchableOpacity>
        </View>

        <Text className="text-xl font-semibold text-textDeepGray mb-1">
          {user?.username || "Guest User"}
        </Text>
        <Text className="text-hint text-sm">
          {user?.email || "user@example.com"}
        </Text>
      </View>

      <View className="flex-1 px-5 py-4">
        {profileOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            onPress={option.onPress}
            className="flex-row items-center justify-between py-4 border-b border-level-light"
          >
            <View className="flex-row items-center gap-3">
              <Feather name={option.icon} size={20} color="#7D8897" />
              <Text className="text-textDeepGray text-base">
                {option.title}
              </Text>
            </View>
            <Feather name="chevron-right" size={20} color="#CDCDCD" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => setShowLogoutModal(true)}
          className="flex-row items-center justify-between py-4 mt-4"
        >
          <View className="flex-row items-center gap-3">
            <Feather name="log-out" size={20} color="#EA0E2E" />
            <Text className="text-itemGradient-start text-base font-semibold">
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Modal
        visible={showLogoutModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowLogoutModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center px-5">
          <View className="bg-primary-light rounded-2xl w-full max-w-sm p-6">
            {/* Modal Content */}
            <View className="items-center mb-6">
              <View className="w-16 h-16 rounded-full bg-itemGradient-start/10 items-center justify-center mb-4">
                <Feather name="log-out" size={28} color="#EA0E2E" />
              </View>
              <Text className="text-xl font-semibold text-textDeepGray mb-2">
                Logout
              </Text>
              <Text className="text-hint text-center">
                Are you sure you want to logout from your account?
              </Text>
            </View>

            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => setShowLogoutModal(false)}
                className="flex-1 py-3 rounded-xl border border-level-light"
              >
                <Text className="text-textDeepGray text-center font-semibold">
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleLogout}
                className="flex-1 py-3 rounded-xl bg-itemGradient-start"
              >
                <Text className="text-colorWhite text-center font-semibold">
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;

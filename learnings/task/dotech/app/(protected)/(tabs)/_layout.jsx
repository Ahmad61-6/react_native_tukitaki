import icons from "@/constants/icons";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabItem = ({ focused, icon, title }) => {
  if (focused) {
    return (
      <MaskedView
        style={{ width: 86, height: 75 }}
        maskElement={
          <View
            className="items-center w-full h-full"
            style={{ paddingTop: 14 }}
          >
            <Image
              source={icon}
              className="w-7 h-7 mb-1"
              style={{ tintColor: "black" }} // Black acts as the mask
              resizeMode="contain"
            />
            <Text
              numberOfLines={2}
              className="text-[10px] font-bold text-center leading-tight"
            >
              {title}
            </Text>
          </View>
        }
      >
        <LinearGradient
          colors={["#EA0E2E", "#0562C3"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1 }}
        />
      </MaskedView>
    );
  }

  return (
    <View
      style={{ width: 86, height: 75, paddingTop: 14, alignItems: "center" }}
    >
      <Image
        source={icon}
        className="w-7 h-7 mb-1"
        style={{ tintColor: "#3B3B3B" }}
        resizeMode="contain"
      />
      <Text
        numberOfLines={2}
        className="text-[10px] font-bold text-center text-textDeepGray leading-tight"
      >
        {title}
      </Text>
    </View>
  );
};

const CustomTabBarBackground = () => {
  const { width } = useWindowDimensions();

  const HOLE_SIZE = 86;
  const BORDER_WIDTH = 1000;
  const TOTAL_SIZE = HOLE_SIZE + BORDER_WIDTH * 2;
  const RADIUS = TOTAL_SIZE / 2;

  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <View
        style={{
          position: "absolute",
          width: TOTAL_SIZE,
          height: TOTAL_SIZE,
          borderRadius: RADIUS,
          borderWidth: BORDER_WIDTH,
          borderColor: "#EDF6FF",
          backgroundColor: "transparent",
          left: width / 2 - RADIUS,
          top: -5 - RADIUS,
        }}
      />
    </View>
  );
};

const FabButton = (props) => {
  return (
    <View
      style={[
        props.style,
        {
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "transparent",
        },
      ]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={props.onPress}
        style={{
          position: "absolute",
          top: -52,
        }}
        className="items-center justify-center"
      >
        <LinearGradient
          colors={["#EA0E2E", "#0562C3"]}
          start={{ x: 0.1, y: 0.2 }}
          end={{ x: 0.1, y: 0.9 }}
          style={[
            {
              width: 70,
              height: 70,
              borderRadius: 35,
              alignItems: "center",
              justifyContent: "center",
            },
            Platform.OS === "ios"
              ? {
                  shadowColor: "#EA0E2E",
                  shadowOffset: { width: 0, height: 6 },
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                }
              : { elevation: 8 }, // Android shadow
          ]}
        >
          <Image
            source={icons.qr}
            className="w-10 h-10"
            style={{ tintColor: "#FFFFFF" }}
            resizeMode="contain"
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarBackground: () => <CustomTabBarBackground />,
        tabBarStyle: {
          position: "absolute",
          height: 75 + insets.bottom,
          backgroundColor: "transparent",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingTop: 14,
        },
        animation: "fade",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              icon={icons.btmNavIcon1}
              title="Marketplace"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="services"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              icon={icons.btmNavIcon4}
              title="Services"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="qr"
        options={{
          tabBarButton: (props) => <FabButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="road_assist"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              icon={icons.btmNavIcon3}
              title="Roadside Assistance"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem
              focused={focused}
              icon={icons.btmNavIcon2}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}

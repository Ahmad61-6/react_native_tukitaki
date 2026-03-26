import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import icons from "../../../constants/icons";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const GRADIENT_COLORS = ["#EA0E2E", "#0562C3"];
const GRADIENT_START = { x: 0, y: 0 };
const GRADIENT_END = { x: 1, y: 1 };

const TAB_BAR_HEIGHT = 72;
const FAB_RING_SIZE = 76; // outer white ring diameter
const FAB_BUTTON_SIZE = 62; // inner gradient circle diameter
const FAB_ICON_SIZE = 28;
const FAB_LIFT = 24; // px the FAB rises above the bar top edge

// ─── GradientIcon ─────────────────────────────────────────────────────────────
const GradientIcon = ({ icon, focused }) => {
  if (!focused) {
    return (
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 22, height: 22, tintColor: "#7D8897" }}
      />
    );
  }

  return (
    <MaskedView
      style={{ width: 22, height: 22 }}
      maskElement={
        <Image
          source={icon}
          resizeMode="contain"
          style={{ width: 22, height: 22, tintColor: "#000" }}
        />
      }
    >
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={GRADIENT_START}
        end={GRADIENT_END}
        style={{ width: 22, height: 22 }}
      />
    </MaskedView>
  );
};

// ─── GradientText ─────────────────────────────────────────────────────────────
const GradientText = ({ title, focused }) => {
  if (!focused) {
    return (
      <Text
        numberOfLines={2}
        style={{
          fontSize: 10,
          textAlign: "center",
          fontFamily: "OpenSans-SemiBold",
          color: "#7D8897",
          lineHeight: 13,
        }}
      >
        {title}
      </Text>
    );
  }

  return (
    <MaskedView
      maskElement={
        <Text
          numberOfLines={2}
          style={{
            fontSize: 10,
            textAlign: "center",
            fontFamily: "OpenSans-Bold",
            color: "#000",
            lineHeight: 13,
          }}
        >
          {title}
        </Text>
      }
    >
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        {/* Invisible twin — gives the gradient its dimensions */}
        <Text
          numberOfLines={2}
          style={{
            fontSize: 10,
            textAlign: "center",
            fontFamily: "OpenSans-Bold",
            lineHeight: 13,
            opacity: 0,
          }}
        >
          {title}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

// ─── TabIcon ──────────────────────────────────────────────────────────────────
const TabIcon = ({ focused, icon, title }) => (
  <View
    style={{
      alignItems: "center",
      justifyContent: "center",
      paddingTop: 10,
      width: 76,
    }}
  >
    <GradientIcon icon={icon} focused={focused} />
    <View style={{ marginTop: 4, alignItems: "center" }}>
      <GradientText title={title} focused={focused} />
    </View>
  </View>
);

// ─── CustomTabBarButton (FAB) ─────────────────────────────────────────────────
// Positioned so its centre sits FAB_LIFT px above the top of the tab bar.
// The ring background matches the tab bar colour so it merges seamlessly.
const CustomTabBarButton = ({ onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.85}
    style={{
      top: -(FAB_LIFT + FAB_RING_SIZE / 2 - TAB_BAR_HEIGHT / 2),
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      width: FAB_RING_SIZE,
      height: FAB_RING_SIZE,
    }}
  >
    {/* Halo ring — same colour as the tab bar so it "punches through" */}
    <View
      style={{
        width: FAB_RING_SIZE,
        height: FAB_RING_SIZE,
        borderRadius: FAB_RING_SIZE / 2,
        backgroundColor: "#EDF6FF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Gradient button */}
      <LinearGradient
        colors={GRADIENT_COLORS}
        start={GRADIENT_START}
        end={GRADIENT_END}
        style={{
          width: FAB_BUTTON_SIZE,
          height: FAB_BUTTON_SIZE,
          borderRadius: FAB_BUTTON_SIZE / 2,
          alignItems: "center",
          justifyContent: "center",
          ...Platform.select({
            ios: {
              shadowColor: "#EA0E2E",
              shadowOffset: { width: 0, height: 8 },
              shadowOpacity: 0.4,
              shadowRadius: 14,
            },
            android: { elevation: 12 },
          }),
        }}
      >
        <Image
          source={icons.qr}
          resizeMode="contain"
          style={{
            width: FAB_ICON_SIZE,
            height: FAB_ICON_SIZE,
            tintColor: "#FFFFFF",
          }}
        />
      </LinearGradient>
    </View>
  </TouchableOpacity>
);

// ─── TabsLayout ───────────────────────────────────────────────────────────────
const TabsLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          // Add safe-area padding at the bottom so icons aren't hidden
          // behind the home indicator on modern devices
          height: TAB_BAR_HEIGHT + insets.bottom,
          paddingBottom: insets.bottom,
          backgroundColor: "#EDF6FF",
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          ...Platform.select({
            ios: {
              shadowColor: "#0F172A",
              shadowOffset: { width: 0, height: -4 },
              shadowOpacity: 0.08,
              shadowRadius: 16,
            },
            android: { elevation: 20 },
          }),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
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
            <TabIcon
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
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tabs.Screen
        name="road_assist"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.btmNavIcon3}
              title="Roadside assistance"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.btmNavIcon2}
              title="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

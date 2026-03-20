import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="saved"
        options={{ title: "Saved", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Search", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerShown: false }}
      />
      <Tabs.Screen
        name="movies/[id]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

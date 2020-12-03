// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import {SafeAreaView } from "react-native";
import { BottomNavigation, Text } from "react-native-paper";

import SettingsActivity from "../activity/Settings";
import LatestNewsActivity from "../activity/LatestNewsActivity";

  const HomeRoute = () => <Text>Music</Text>;

  const LatestRoute = () => <LatestNewsActivity />;

  const SettingsRoute = () => <SettingsActivity/>;

const SecondActivity = ({ navigation }) => {

  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "shield-home" },
    { key: "latest", title: "Latest News", icon: "newspaper" },
    { key: "settings", title: "Settings", icon: "cogs" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    latest: LatestRoute,
    settings: SettingsRoute,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaView>
  );
};



export default SecondActivity;

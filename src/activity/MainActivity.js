import * as React from "react";
import {
  SafeAreaView,
} from "react-native";

import { BottomNavigation } from "react-native-paper";

import SettingsActivity from "../activity/Settings";
import LatestNewsActivity from "../activity/LatestNewsActivity";
import HomeActivity from "../activity/HomeActivity";

  const HomeRoute = () => <HomeActivity/>;

  const LatestRoute = () => <LatestNewsActivity />;

  const SettingsRoute = () => <SettingsActivity />;
  

const SecondActivity = ({ navigation }) => {

  
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "shield-home", color: "#FBDE44FF" },
    { key: "latest", title: "Just In", icon: "newspaper", color: "#FBDE44FF" },
    { key: "settings", title: "Settings", icon: "cogs", color: "#FBDE44FF" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    latest: LatestRoute,
    settings: SettingsRoute,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Bottom navigation */}
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaView>
  );
};

export default SecondActivity;

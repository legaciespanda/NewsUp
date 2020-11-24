import React, { useState, useEffect } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  BackHandler,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import NetInfo from "@react-native-community/netinfo";
import { useNetInfo } from "@react-native-community/netinfo";
import NetworkUtils from "./src/NetworkUtils";
import * as Network from "expo-network";


import { checkConnected } from "./src/InternetDetect";
import NoInternetActivity from "./src/activity/NoInternetActivity";

import LoginActivity from "./src/auth/LoginActivity"
console.disableYellowBox = true;


 // const [connectStatus, setConnectStatus] = useState();
class App extends React.Component {
  state = {
    isReady: false,
    setConnectStatus: false,
  };

  CheckConnectivity = () => {
    NetInfo.isConnected.fetch().then((isConnected) => {
      if (isConnected) {
        Alert.alert("You are online!");
        this.setState({ setConnectStatus: isConnected });
      } else {
        Alert.alert("You are offline!");
      }
    });
  };

  async componentDidMount() {
    //handling back button press
    BackHandler.addEventListener("hardwareBackPress", exitApps);

    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", exitApps);
  }

  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    try {
      await checkInternetAccess();
    } catch (e) {
      console.warn(e);
    } finally {
      this.setState({ appIsReady: true }, async () => {
        await SplashScreen.hideAsync();
      });
    }
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return this.state.setConnectStatus ? (
      <View style={styles.container}>
        <Text style={styles.text}>SplashScreen Demo! 👋</Text>
      </View>
    ) : (
      <NoInternetActivity onCheck={this.CheckConnectivity} />
    );
  }
}



// Put any code you need to prepare your app in these functions
async function checkInternetAccess() {
  await SplashScreen.hideAsync();
  //setTimeout(this.setState({ appIsReady: true }),900);
  setTimeout(SplashScreen.hide, 900);
}

async function checkInternet() {
  const isConnected = await NetworkUtils.isNetworkAvailable();
  if (isConnected) { 
    <Text style={styles.text}>Connected</Text>;
  } else {
    <Text style={styles.text}>Not Connected</Text>;
  }

}

const exitApps = () => {
  Alert.alert(
    "Exit App",
    "Do you really want to exit the application?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Yes", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#05014a",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

AppRegistry.registerComponent("App", () => App);

export default App;

// Import React and Component
import React, {useState, useEffect} from 'react';
import { ActivityIndicator, View, StyleSheet, Image, Text, Alert } from 'react-native';

import { checkConnected } from "../../src/config/InternetDetect";

import firebase from "../core/config";
import "@firebase/auth";

import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = ({navigation}) => {
  //State for ActivityIndicator animation
  const [animating, setAnimating] = useState(true);
  const [isLoggedIn, setisLoggedIn] = useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@guest_login");
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  const getData2 = async () => { 
      return await AsyncStorage.getItem("@guest_login");
  }
  useEffect(() => {
    if (checkConnected) {
      setTimeout(() => {
        setAnimating(false);
        const subscriber = firebase
          .auth()
          .onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      }, 4000);
    }
      });
  
        function onAuthStateChanged(isLoggedIn) {
             setisLoggedIn(isLoggedIn);
             if (isLoggedIn) {
               navigation.replace("NavigationComponent");
             } else if (getData2() === "yes") {
               navigation.replace("NavigationComponent");
             }
             else {
               navigation.replace("Auth");
             }
             // if (initializing) setInitializing(false);
  }

  //console.log("Async Data is",getData2());

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Initializing NewsUp...</Text>
      <Image
        source={require("../../assets/loader.gif")}
        style={{ width: "90%", resizeMode: "contain", margin: 30 }}
      />

      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  header: {
    fontSize: 20,
    color: "#28334AFF",
    fontWeight: "bold",
    paddingVertical: 14,
  },
});

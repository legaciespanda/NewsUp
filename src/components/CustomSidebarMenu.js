import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  Share,
  Platform,
  BackHandler
} from "react-native";

import Communications from "react-native-communications";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";


import firebase from "../core/config";
import "@firebase/auth";
import "@firebase/firestore";

const CustomSidebarMenu = (props) => {
  const [userData, setUserData] = useState([]);
  const [isLoggedIn, setisLoggedIn] = useState();

      useEffect(() => {
             setTimeout(() => {
               getUSerDetail();
              const subscriber = firebase
                .auth()
                .onAuthStateChanged(onAuthStateChanged);
              return subscriber;
             }, 3000);
      }, []);
  
  function onAuthStateChanged(isLoggedIn) {
    setisLoggedIn(isLoggedIn);
  }
  //current logged in user email
    const userEmail = () => {
      let email = firebase.auth().currentUser.email;
      return email;
    };

  //get user details from firebase
   const getUSerDetail = async () => {
     try {
       const userDatax = await firebase
         .firestore()
         .collection("Users")
         .doc(userEmail())
         .get();
       if (userDatax != undefined) {
         //fetch user data and push to array
         setUserData(userDatax.data());
         //console.log("Get Task 3", userData);
       }
     } catch (error) {
       //console.log("Get Task 3", error);
     }
  };
  
  //function for logging user out of the applicatio
    const __logout = () => {
      firebase.auth().signOut();
      props.navigation.replace("Auth");
  };
  
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={require("../../assets/auth/logo.png")}
        style={styles.sideMenuProfileIcon}
      />
      <View style={styles.appname}>
        {/* Only show user's name if the user is logged in */}
        {isLoggedIn ? (
          <Text>Hy {`${userData.name}`}</Text>
        ) : (
          <Text>NewsUp</Text>
        )}
        {/* <Text>Hy {`${userData.name}`}</Text> */}
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Contact Us"
          onPress={() => {
            Alert.alert(
              "Contact NewsUp",
              "Please choose your preffered method to get in contact with NewsUp.",
              [
                {
                  text: "Send Email",
                  onPress: () => {
                    //send email
                    Communications.email(
                      ["contact@newsuponline.com"],
                      null,
                      null,
                      "Contact NewsUp",
                      "Please write to us and we will resond in a short while"
                    );
                  },
                },

                {
                  text: "Phone Call",
                  //make a phon call
                  onPress: () => {
                    Communications.phonecall("+919000013014", true);
                  },
                },
              ],
              { cancelable: true }
            );
          }}
        />
        <DrawerItem label="Invite Friends" onPress={() => shareWithFriends()} />

        <View style={styles.customItem}>
          <Text
            onPress={() =>
              Platform.OS === "android"
                ?
                 Linking.openURL("market://details?id=com.megtrix.newsup")
                // Linking.openURL(
                //     "https://play.google.com/store/apps/details?id=com.megtrix.newsup&hl=en"
                //   )
                :
                Linking.openURL("market://details?id=com.megtrix.newsup")
                //Linking.openURL("applinks:share.myapp.com")
            }
          >
            Rate Our App
          </Text>
          <Image
            source={{ uri: BASE_PATH + "star_filled.png" }}
            style={styles.iconStyle}
          />
        </View>
        <DrawerItem
          label="Exit"
          onPress={() =>
            Alert.alert(
              "Exit NewsUp",
              "Are you sure? You want to exit application?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Exit",
                  onPress: () => BackHandler.exitApp(),
                },
              ],
              { cancelable: false }
            )
          }
        />
        {/* Only show logout option if the user has been logged out */}
        {isLoggedIn ? (
          <DrawerItem
            label="Logout"
            onPress={() =>
              Alert.alert(
                "Log Out",
                "Are you sure? You want to log out of NewsUP?",
                [
                  {
                    text: "Cancel",
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: "Logut",
                    onPress: () => {
                      __logout();
                    },
                  },
                ],
                { cancelable: false }
              )
            }
          />
        ) : null}
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        NewsUp- Version 1.0.0
      </Text>
    </SafeAreaView>
  );
};


const share2 = () => {
    const options = {
    title:"Kung",
    subject: "title",
    message: "Hello",
  }

    Share.open(options)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
}

  const shareWithFriends = () => {
    const inputValue =
      "Hello friends! Download NewsUp and install to start getting latest news";
    const titleVal = "NewsUp";
    const urlVal = "";

    //Here is the Share API
    Share.share({
      title: titleVal.toString(),
      message: inputValue.toString(),
      url: urlVal,
    })
      //after successful share return result
      .then((result) => console.log(result))
      //If any thing goes wrong it comes here
      .catch((errorMsg) => console.log(errorMsg));
};
  
const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: "center",
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  appname: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 50,
    alignSelf: "center",
  },
});

export default CustomSidebarMenu;

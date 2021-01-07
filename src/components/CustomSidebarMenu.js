import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert,
  Share,
  Platform
} from "react-native";
//import Share from "react-native-share";

//import * as Sharing from "expo-sharing";
import Communications from "react-native-communications";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";


//import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    "https://raw.githubusercontent.com/AboutReact/sampleresource/master/";
  const proileImage = "react_logo.png";

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*Top Large Image */}
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <View style={styles.appname}>
        <Text>Newsuponline</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />

        {/* <DrawerItem
          label="User Profile"
          onPress={() =>
            Platform.OS === "android"
              ? Linking.openURL("https://google.com/")
              : Linking.openURL("https://aboutreact.com/")
          }
        /> */}

        <DrawerItem label="Contact Us"
          onPress={() => {
                      Alert.alert(
                        "Contact Digi Wigi",
                        "Please choose your preffered method to get in contact with Digi-Wigi.",
                        [
                          {
                            text: "Send Email",
                            onPress: () => {
                              //send email
                              Communications.email(
                                ["contact@gmail.com", "youandinews@gmail.com"],
                                null,
                                null,
                                "Contact Digi-Wigi",
                                "Please write to us and we will resond in a short while"
                              );
                            },
                          },

                          {
                            text: "Phone Call",
                            //make a phon call
                            onPress: () => {
                              Communications.phonecall("+2347012159048", true);
                            },
                          },
                        ],
                        { cancelable: true }
                      );
        }}
        />
        <DrawerItem
          label="Invite Friends"
          onPress={() =>
            shareWithFriends()
          }
        />

        <View style={styles.customItem}>
          <Text
            onPress={() =>
              Platform.OS === "android"
                ? Linking.openURL(
                    "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
                  )
                : Linking.openURL("applinks:share.myapp.com")
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
              "Exit DigiWigi",
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
                  onPress: () => {
                    //AsyncStorage.clear();
                    //props.navigation.replace("Auth");
                    return null;
                  },
                },
              ],
              { cancelable: false }
            )
          }
        />
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        Newsuponline- Version 0.1
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
      "Hello friends! Download DigiWigi and install to start getting latest news";
    const titleVal = "DigiWigi";
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

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
        <Text>Rakesh Blog</Text>
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="User Profile"
          onPress={() =>
            Platform.OS === "android"
              ? Linking.openURL("https://google.com/")
              : Linking.openURL("https://aboutreact.com/")
          }
        />
        <DrawerItem label="Contact Us" />
        <DrawerItem
          label="Invite Friends"
          onPress={() =>
            Linking.openURL(
              "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
            )
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
          label="Logout"
          onPress={() =>
            Alert.alert(
              "Logout",
              "Are you sure? You want to logout?",
              [
                {
                  text: "Cancel",
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: "Confirm",
                  onPress: () => {
                    //AsyncStorage.clear();
                    props.navigation.replace("Auth");
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
        DigiWigi- Version 0.1
      </Text>
    </SafeAreaView>
  );
};

// const shareApp =async () => {
//   if (await Sharing.isAvailableAsync()) {
//     const url = "https://www.ggogle.com"
//     const dialogTitle = "Hello";
//     const options = await Sharing.shareAsync(url, dialogTitle);
//   }
// }

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

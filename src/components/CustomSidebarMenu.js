import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Alert
} from "react-native";



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
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <DrawerItem
          label="Contact Us"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <DrawerItem
          label="Invite Friends"
          onPress={() => Linking.openURL("https://aboutreact.com/")}
        />
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL("https://aboutreact.com/");
            }}
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
              'Logout',
              'Are you sure? You want to logout?',
              [
                {
                  text: 'Cancel',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirm',
                  onPress: () => {
                    //AsyncStorage.clear();
                    props.navigation.replace('Auth');
                    return null;
                  },
                },
              ],
              {cancelable: false},
            )
          }
        />
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        Rakesh News App - Version 0.1
      </Text>
    </SafeAreaView>
  );
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

import * as React from "react";
import {
  View,
  SafeAreaView,
  Alert,
  Platform,
  Linking,
  Share,
} from "react-native";
import { List } from "react-native-paper";
import { AppStyles } from "../config/AppStyles";
import RNStyledDialogs from "react-native-styled-dialogs";
import Communications from "react-native-communications";

const SettingsActivity = ({ navigation }) => {

  const shareWithFriends = () => {
    const inputValue =
      "Hello friends! Download DigiWigi and install to start getting latest news";
    const titleVal = "DigiWigi";
    const urlVal = ""

    //Here is the Share API
    Share.share({
      title: titleVal.toString(),
      message: inputValue.toString(),
      url:urlVal,
    })
      //after successful share return result
      .then((result) => console.log(result))
      //If any thing goes wrong it comes here
      .catch((errorMsg) => console.log(errorMsg));
  };
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <List.Item
          title="About DigiWigi"
          description="Know more about DigiWigi"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="newspaper"
            />
          )}
          onPress={() =>
            RNStyledDialogs.Show({
              title: "Awesome!",
              description:
                "Glad to you like RNStyledDialogs! If you are up for it, we would like to appreciate you receiving us.",
              positiveText: "Go",
              neutralText: "Close",
              negativeText: "Later",
              onPositive: () => { },
              onNeutral: () => { },
              onNegative: () => { },
              onCancellable: () => { },
            })
          }
        />

        <List.Item
          title="Contact DigiWigi"
          description="Contact us if any issues,complains, etc"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="mail" />
          )}
          onPress={() =>
            Communications.email(
              ["aboutreact11@gmail.com", "hello@aboutreact.com"],
              null,
              null,
              "Demo Subject",
              "Demo Content for the mail"
            )
          }
        />
        <List.Item
          title="Privacy Policy"
          description="Please read our Privacy Policy"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="book-open-variant"
            />
          )}
        />
        <List.Item
          title="Rate"
          description="To help us improve, Pls Rate our app!"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="star" />
          )}
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
              );
            } else if (Platform.OS === "ios") {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
              );
            }
          }}
        />
        <List.Item
          title="Invite Friends"
          description="Share DigiWigi with friends"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="share-variant"
            />
          )}
          onPress={() => shareWithFriends()}
        />
        <List.Item
          title="Version"
          description="DigiWigi Current Version"
          titleNumberOfLines={3}
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="alert-circle"
            />
          )}
          onPress={() =>
            Alert.alert(
              "DigiWigi Current Version",
              "Version 0.1",
              [
                {
                  text: "Ok",
                  onPress: () => {
                    return null;
                  },
                },
              ],
              { cancelable: false }
            )
          }
        />
        <List.Item
          title="App Update"
          description="Check for latest version of DigiWigi"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="cellphone-arrow-down"
            />
          )}
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
              );
            } else if (Platform.OS === "ios") {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en"
              );
            }
          }}
        />
        <List.Item
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="logout" />
          )}
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
      </View>
    </SafeAreaView>
  );
};

export default SettingsActivity;



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
//import RNStyledDialogs from "react-native-styled-dialogs";
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
          title="Advertise on DigiWigi"
          description="We will help you promote your content"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="bullhorn" />
          )}
          onPress={() =>
            Alert.alert(
              "Advertise on Digi-Wigi",
              "Are you an entrepreneur or a business tycoon and you find it difficult advertising your content?  \n\nAdvertise with DigiWigi today and we will help you promote your content and make you reach out to a wider audience",
              [
                {
                  text: "Advertise",
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
                  text: "Cancel",
                  //make a phon call
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
            Alert.alert(
              "About Digi Wigi",
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
          title="Contact DigiWigi"
          description="Contact us if any issues,complains, etc"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="mail" />
          )}
          onPress={() =>
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
              { cancelable: false }
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

        {/* <List.Item
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
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default SettingsActivity;



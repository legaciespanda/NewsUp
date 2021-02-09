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
import Communications from "react-native-communications";
//import { packageID as package } from "../../app.json";

const SettingsActivity = ({ navigation }) => {

  const packageID = "com.megtrix.newsup";

  const shareWithFriends = () => {
    const inputValue =
      "Hello friends! Download NewsUp and install to start getting latest news";
    const titleVal = "NewsUp";
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
          title="Advertise on NewsUp"
          description="We will help you promote your content"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="bullhorn"
            />
          )}
          onPress={() =>
            Alert.alert(
              "Advertise on NewsUp",
              "Are you an entrepreneur or a business tycoon and you find it difficult advertising your content?  \n\nAdvertise with NewsUp today and we will help you promote your content and make you reach out to a wider audience",
              [
                {
                  text: "Advertise",
                  onPress: () => {
                    //send email
                    Communications.email(
                      ["contact@newsuponline.com", "youandinews@gmail.com"],
                      null,
                      null,
                      "Contact NewsUp",
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
          title="About NewsUp"
          description="Know more about NewsUp"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="newspaper"
            />
          )}
          onPress={() =>
            Alert.alert(
              "About NewsUp",
              "As an organization we always aimed since inception to bring the news and updates about digital media, technology, start ups, businesses etc on your finger tips, we also realize time is the essence and to cater with time, our efforts here are to share the news updates in brief in less than 70 words which could save your time to read at length. \n\n An extraordinary news app that helps you stay updated with the latest news in a bit-sized format.\n\n Every news piece is shared in 60-70 words or less. That means you can read all the news in just a few minutes, without having to spend a lot of time on it. Every piece of news is very easy to read, it’s small and fully formatted to be read in less than a minute. On top of that, NewsUp also has a dedicated feed where you can get personalized stories in no time. \n\n It helps immensely if you want to know as much as possible without wasting time.If you always want to know the latest news, give NewsUp a try today. You get access to the exclusive news relating to digital, business, industries and start ups without spending a lot of time searching for the news yourself. It’s provided directly to you in no time.",
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
          title="Contact NewsUp"
          description="Contact us if any issues,complains, etc"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="mail" />
          )}
          onPress={() =>
            Alert.alert(
              "Contact NewsUp",
              "Please choose your preffered method to get in contact with NewsUp.",
              [
                {
                  text: "Send Email",
                  onPress: () => {
                    //send email
                    Communications.email(
                      ["contact@newsuponline.com", "youandinews@gmail.com"],
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
              { cancelable: false }
            )
          }
        />
        <List.Item
          title="Rate"
          description="To help us improve, Pls Rate our app!"
          left={(props) => (
            <List.Icon {...props} color={AppStyles.color.main} icon="star" />
          )}
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL(`market://details?id=${packageID}`);
              // Linking.openURL(
              //   "https://play.google.com/store/apps/details?id=com.megtrix.newsup&hl=en"
              // );
            } else if (Platform.OS === "ios") {
              Linking.openURL(`market://details?id=${packageID}`);
              // Linking.openURL(
              //   "'https://itunes.apple.com/us/app/expo-client/id982107779?mt=8'"
              // );
            }
          }}
        />
        <List.Item
          title="Invite Friends"
          description="Share NewsUp with friends"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="share-variant"
            />
          )}
          onPress={() => shareWithFriends()}
        />
        {/* <List.Item
          title="Version"
          description="NewsUp Current Version"
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
              "NewsUp Current Version",
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
        /> */}
        <List.Item
          title="App Update"
          description="Check for latest version of NewsUp"
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="cellphone-arrow-down"
            />
          )}
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL(`market://details?id=${packageID}`);
            } else if (Platform.OS === "ios") {
              Linking.openURL(`market://details?id=${packageID}`);
            }
          }}
        />

        <List.Item
          title="Privacy Policy"
          description="Please read our Privacy Policy"
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL("https://newsuponline.com/privacy-policy");
            } else if (Platform.OS === "ios") {
              Linking.openURL("https://newsuponline.com/privacy-policy");
            }
          }}
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="book-open-variant"
            />
          )}
        />

        <List.Item
          title="Terms and Condition"
          description="Please read our Terms and Condition"
          onPress={() => {
            if (Platform.OS === "android") {
              Linking.openURL("https://newsuponline.com/terms");
            } else if (Platform.OS === "ios") {
              Linking.openURL("https://newsuponline.com/terms");
            }
          }}
          left={(props) => (
            <List.Icon
              {...props}
              color={AppStyles.color.main}
              icon="book-open-variant"
            />
          )}
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



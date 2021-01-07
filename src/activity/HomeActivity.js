import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
//import { AppLoading, Asset, Font, Icon } from "expo";
import { LinearGradient } from "expo-linear-gradient";
import { images, icons, COLORS, FONTS, SIZES } from "../home-config";
import { Text } from "react-native-paper";
import categoryID from "../util/categoryId";
import Toast from "react-native-simple-toast";
import docs from "../api/docs";



//   _loadResourcesAsync = async () => {
//     return Promise.all([
//       Font.loadAsync({
//         ...FONTS.body3,
//       }),
//     ]);
// };
  
const NewsOptions = ({ icon, label, onPress }) => {
    
    return (
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onPress={onPress}
      >
        <View style={[styles.shadow, { width: 120, height: 100 }]}>
          <Image
            style={[
              {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                    borderRadius: 10,
              },
            ]}
            source={icon}
            resizeMode="cover"
          />
        </View>
        <Text style={{ marginTop: -10, color: COLORS.gray, ...FONTS.body3 }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
};
//news category option item functional component
const OptionItemz = ({ bgColor, icon, label, onPress }) => {
 //const fonnt = Font.loadAsync({ ...FONTS.body3 });

  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      onPress={onPress}
    >
      <View style={[styles.shadow, { width: 60, height: 60 }]}>
        <LinearGradient
          style={[
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              backgroundColor: "red",
            },
          ]}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image
            source={icon}
            resizeMode="cover"
            style={{
              tintColor: COLORS.white,
              width: 30,
              height: 30,
            }}
          />
        </LinearGradient>
      </View>
      <Text
        style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const HomeActivity = ({ navigation }) => {

    useEffect(() => {
        showUnreadNewsNotif();
    },[3])

    //displays number of unread news to the user
    const showUnreadNewsNotif = () => {
        Toast.showWithGravity(
            "Hy! You have got " +
            `${categoryID(docs, "2").length}` +
            " latest news today from Digi Wigi. Please navigate to the Just-In tab to start reading",
            Toast.LONG,
            Toast.CENTER
        );
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Banner */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.base,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Image
          source={{
            uri: "https://blog.trustlancers.com/app-icons/home-banner.jpg",
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "85%",
            borderRadius: 15,
          }}
        />
      </View>

      {/* Options */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: -40,
            paddingHorizontal: SIZES.base,
          }}
        >
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/latest.png",
            }}
            label="Latest"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/technology.png",
            }}
            label="Technology"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/marketing.png",
            }}
            label="Marketing"
            onPress={() => {
              console.log("Flight");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            paddingHorizontal: SIZES.base,
          }}
        >
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/advertising.png",
            }}
            label="Advertising"
            onPress={() => {
              console.log("Flight");
            }}
          />

          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/digital.png",
            }}
            label="Digital"
            onPress={() => {
              console.log("Flight");
            }}
          />

          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/business.png",
            }}
            label="Business"
            onPress={() => {
              console.log("Flight");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: -5,
            paddingHorizontal: SIZES.base,
          }}
        >
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/sports.png",
            }}
            label="Sports"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/radio.png",
            }}
            label="Radio"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <NewsOptions
            icon={{
              uri: "https://blog.trustlancers.com/app-icons/strp.png",
            }}
            label="Startups"
            onPress={() => {
              console.log("Flight");
            }}
          />
          {/* <OptionItemz
            bgColor={["#7be993", "#46caaf"]}
            icon={icons.compass}
            label="Startups"
            onPress={() => {
              console.log("Adventure");
            }}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default HomeActivity;

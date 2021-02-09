import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

import { images, icons, COLORS, SIZES } from "../home-config";
import { Text } from "react-native-paper";
import { appIconUrl } from "../api/News";


import { useNavigation } from "@react-navigation/native";

  
const NewsOptions = ({ icon, label, onPress }) => {
    
    return (
      <TouchableOpacity
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        onPress={onPress}
      >
        <View style={[styles.shadow, { width: 90, height: 90 }]}>
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
        <Text style={{ marginTop: -10, color: COLORS.gray }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
};
// //news category option item functional component
// const OptionItemz = ({ bgColor, icon, label, onPress }) => {

//   return (
//     <TouchableOpacity
//       style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
//       onPress={onPress}
//     >
//       <View style={[styles.shadow, { width: 60, height: 60 }]}>
//         <LinearGradient
//           style={[
//             {
//               flex: 1,
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: 15,
//               backgroundColor: "red",
//             },
//           ]}
//           colors={bgColor}
//           start={{ x: 0, y: 0 }}
//           end={{ x: 0, y: 1 }}
//         >
//           <Image
//             source={icon}
//             resizeMode="cover"
//             style={{
//               tintColor: COLORS.white,
//               width: 30,
//               height: 30,
//             }}
//           />
//         </LinearGradient>
//       </View>
//       <Text
//         style={{ marginTop: SIZES.base, color: COLORS.gray}}
//       >
//         {label}
//       </Text>
//     </TouchableOpacity>
//   );
// };


const HomeActivity = () => {

  const navigation = useNavigation();

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
            uri: appIconUrl + "home-banner.jpg",
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
              uri: appIconUrl + "latest.png",
            }}
            label="Latest"
            onPress={() => {
               navigation.navigate("LatestNewsActivity");
            }}
          />
          <NewsOptions
            icon={{
              uri: appIconUrl + "technology.png",
            }}
            label="Technology"
            onPress={() => navigation.navigate("TechnologyActivity")}
          />
          <NewsOptions
            icon={{
              uri: appIconUrl + "marketing.png",
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
              uri: appIconUrl + "advertising.png",
            }}
            label="Advertising"
            onPress={() => {
               navigation.navigate("AdvertActivity");
            }}
          />

          <NewsOptions
            icon={{
              uri: appIconUrl + "digital.png",
            }}
            label="Digital"
            onPress={() => {
               navigation.navigate("DigitalActivity");
            }}
          />

          <NewsOptions
            icon={{
              uri: appIconUrl + "business.png",
            }}
            label="Business"
            onPress={() => {
               navigation.navigate("BusinessActivity");
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
              uri: appIconUrl + "sports.png",
            }}
            label="Sports"
            onPress={() => {
               navigation.navigate("SportsActivity");
            }}
          />
          <NewsOptions
            icon={{
              uri: appIconUrl + "radio.png",
            }}
            label="Radio"
            onPress={() => {
               navigation.navigate("RadioActivity");
            }}
          />
          <NewsOptions
            icon={{
              uri: appIconUrl + "strp.png",
            }}
            label="Startups"
            onPress={() => {
               navigation.navigate("StartupsActivity");
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

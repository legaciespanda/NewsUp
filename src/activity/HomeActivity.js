import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { images, icons, COLORS, FONTS, SIZES } from "../home-config";
import { Text } from "react-native-paper";

//news category option item functional component
const OptionItemz = ({ bgColor, icon, label, onPress }) => {
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
          source={images.homeBanner}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "80%",
            borderRadius: 15,
          }}
        />
      </View>

      {/* Options */}
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View
          style={{
            flexDirection: "row",
            marginTop:-20,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItemz
            bgColor={["#46aeff", "#5884ff"]}
            icon={icons.airplane}
            label="Latest"
            onPress={() => {
              console.log("Flight");
            }}
          />
          <OptionItemz
            bgColor={["#fddf90", "#fcda13"]}
            icon={icons.train}
            label="Technology"
            onPress={() => {
              console.log("Train");
            }}
          />
          <OptionItemz
            bgColor={["#e973ad", "#da5df2"]}
            icon={icons.bus}
            label="Marketing"
            onPress={() => {
              console.log("Bus");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItemz
            bgColor={["#ffc465", "#ff9c5f"]}
            icon={icons.bed}
            label="Advertising"
            onPress={() => {
              console.log("Hotel");
            }}
          />
          <OptionItemz
            bgColor={["#7cf1fb", "#4ebefd"]}
            icon={icons.eat}
            label="Digital"
            onPress={() => {
              console.log("Eats");
            }}
          />
          <OptionItemz
            bgColor={["#7be993", "#46caaf"]}
            icon={icons.compass}
            label="Business"
            onPress={() => {
              console.log("Adventure");
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.base,
          }}
        >
          <OptionItemz
            bgColor={["#ffc465", "#ff9c5f"]}
            icon={icons.bed}
            label="Sports"
            onPress={() => {
              console.log("Hotel");
            }}
          />
          <OptionItemz
            bgColor={["#7cf1fb", "#4ebefd"]}
            icon={icons.eat}
            label="Radio"
            onPress={() => {
              console.log("Eats");
            }}
          />
          <OptionItemz
            bgColor={["#7be993", "#46caaf"]}
            icon={icons.compass}
            label="Startups"
            onPress={() => {
              console.log("Adventure");
            }}
          />
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

import 'react-native-gesture-handler';
import React, {useEffect, useState }from "react";
// Import React and Component
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from "./src/core/Theme"
import { name as appName } from './app.json';
import { AppRegistry, YellowBox, Alert, BackHandler } from "react-native";


// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/activity/Splashscreen';
import LoginActivity from "./src/auth/LoginActivity";
import RegisterActivity from "./src/auth/RegisterActivity";
import ForgotPasswordActivity from "./src/auth/ForgotPassword";

//news categories activities
import TechnologyActivity from "./src/newscategory/technology";
import LatestNewsActivity from "./src/activity/LatestNewsActivity";
import AdvertActivity from "./src/newscategory/advertising";
import BusinessActivity from "./src/newscategory/business";
import DigitalActivity from "./src/newscategory/digital";
import MarketingActivity from "./src/newscategory/marketing";
import RadioActivity from "./src/newscategory/radio";
import SportsActivity from "./src/newscategory/sports";
import StartupsActivity from "./src/newscategory/startups";


import NavigationComponent from './src/components/Navigation';
import { AppStyles } from "./src/config/AppStyles";

const Stack = createStackNavigator();
import { checkConnected } from "./src/config/InternetDetect";

const showAlert = () => {
  return (
    Alert.alert(
      "Error in Internet Connection",
      "To use NewsUp, you must be connected to a Wi-Fi or turn on data",
      [
        { text: "OK", onPress: () => BackHandler.exitApp },
      ],
      { cancelable: false }
    ));       
}

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginActiviy">
      <Stack.Screen
        name="LoginActivity"
        component={LoginActivity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterActivity"
        component={RegisterActivity}
        options={{
          title: "Register", //Set Header Title
          headerStyle: {
            backgroundColor: AppStyles.color.main, //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />

      <Stack.Screen
        name="ForgotPasswordActivity"
        component={ForgotPasswordActivity}
        options={{
          title: "Password Reset - NewsUp", //Set Header Title
          headerStyle: {
            backgroundColor: AppStyles.color.main, //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
        //ForgotPasswordActivity
      />
    </Stack.Navigator>
  );
};


const App = () => {

  // componentDidMount = () =>{
  //   //handling back button press
  //   BackHandler.addEventListener("hardwareBackPress", exitApps);
  //   //_loadResourcesAsync();
  //   ff();
  // };

  //   componentWillUnmount = () => {
  //   BackHandler.removeEventListener("hardwareBackPress", exitApps);
  // }
  console.ignoredYellowBox = ["Setting a timer"];

  return ( checkConnected ? 
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          {/* SplashScreen which will come once for 5 Seconds */}
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            // Hiding header for Splash Screen
            options={{ headerShown: false }}
          />
          {/* Auth Navigator: Include Login and Signup */}
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
          {/* Navigation Drawer as a landing page */}
          <Stack.Screen
            name="NavigationComponent"
            component={NavigationComponent}
            // Hiding header for Navigation Drawer
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="TechnologyActivity"
            component={TechnologyActivity}
            options={{
              title: "Technology News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
          <Stack.Screen
            name="LatestNewsActivity"
            component={LatestNewsActivity}
            // Hiding header for Navigation Drawer
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="AdvertActivity"
            component={AdvertActivity}
            options={{
              title: "Advertising News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="MarketingActivity"
            component={MarketingActivity}
            options={{
              title: "Marketing News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="DigitalActivity"
            component={DigitalActivity}
            options={{
              title: "Digital News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="BusinessActivity"
            component={BusinessActivity}
            options={{
              title: "Business News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="SportsActivity"
            component={SportsActivity}
            options={{
              title: "Sports News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="RadioActivity"
            component={RadioActivity}
            options={{
              title: "Radio News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />

          <Stack.Screen
            name="StartupsActivity"
            component={StartupsActivity}
            options={{
              title: "Startups News- NewsUp", //Set Header Title
              headerStyle: {
                backgroundColor: AppStyles.color.main, //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider> : showAlert()
  ); 
};

export default App;

AppRegistry.registerComponent(appName, () => App);

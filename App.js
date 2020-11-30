import 'react-native-gesture-handler';
// Import React and Component
import React, { useState, useEffect } from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from "./src/core/Theme"
import { name as appName } from './app.json';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Button,
  BackHandler,
} from "react-native";


// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Import Screens
import SplashScreen from './src/activity/Splashscreen';
import LoginActivity from "./src/auth/LoginActivity";
import RegisterActivity from "./src/auth/RegisterActivity"
import NavigationComponent from './src/components/Navigation';
import { AppStyles } from "./src/config/AppStyles";


// import { checkConnected } from "./src/config/InternetDetect";
// import NoInternetActivity from "./src/activity/NoInternetActivity";

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginActiviy">
      <Stack.Screen
        name="LoginActivity"
        component={LoginActivity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterActivity"
        component={RegisterActivity}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: AppStyles.color.main, //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};


const App = () => {

  // const [connectStatus, setConnectStatus] = useState(false);
  
  // //check for internet connection and set connection status
  //   checkConnected().then(checkConnected=>{
  //   setConnectStatus(checkConnected)
  // });

  componentDidMount = () =>{
    //handling back button press
    BackHandler.addEventListener("hardwareBackPress", exitApps);
  };

    componentWillUnmount = () => {
    BackHandler.removeEventListener("hardwareBackPress", exitApps);
  }

  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />

        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />

        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="NavigationComponent"
          component={NavigationComponent}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );

  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator initialRouteName="SplashScreen">
  //       {/* SplashScreen which will come once for 5 Seconds */}

  //       <Stack.Screen
  //         name="SplashScreen"
  //         component={SplashScreen}
  //         // Hiding header for Splash Screen
  //         options={{headerShown: false}}
  //       />

  //       {/* Auth Navigator: Include Login and Signup */}
  //       <Stack.Screen
  //         name="Auth"
  //         component={Auth}
  //         options={{headerShown: false}}
  //       />

  //       {/* Navigation Drawer as a landing page */}
  //       <Stack.Screen
  //         name="NavigationComponent"
  //         component={NavigationComponent}
  //         // Hiding header for Navigation Drawer
  //         options={{headerShown: false}}
  //       />
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // );
};


const exitApps = () => {
  Alert.alert(
    "Exit App",
    "Do you really want to exit the application?",
    [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Exit", onPress: () => BackHandler.exitApp() },
    ],
    { cancelable: false }
  );
};
export default App;

AppRegistry.registerComponent(appName, () => App);

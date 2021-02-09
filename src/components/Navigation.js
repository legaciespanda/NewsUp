import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { AppStyles } from "../config/AppStyles";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import SettingsActivity from "../activity/Settings";
import MainActivity from "../activity/MainActivity";
import LatestNewsActivity from "../activity/LatestNewsActivity";
//import LoginActivity from "./src/auth/LoginActivity";

// Import Custom Sidebar
import CustomSidebarMenu from "./CustomSidebarMenu";
import NavigationDrawerHeader from "./NavigationDrawerHeader"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function LatestNewsActivityStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="LatestNewsActivity">
      <Stack.Screen
        name="LatestNewsActivity"
        component={LatestNewsActivity}
        options={{
          title: "Latest News", //Set Header Title
          headerLeft: () => (
            //<NavigationDrawerStructure navigationProps={navigation} />
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
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
  );
}

function SettingsActivityStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="SettingsActivity">
      <Stack.Screen
        name="SettingsActivity"
        component={SettingsActivity}
        options={{
          title: "Settings - Newsuponline", //Set Header Title
          headerLeft: () => (
            //<NavigationDrawerStructure navigationProps={navigation} />
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
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
  );
}

function MainActivityStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="MainActivity"
      screenOptions={{
        headerLeft: () => (
          //<NavigationDrawerStructure navigationProps={navigation} />
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: AppStyles.color.main, //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="MainActivity"
        component={MainActivity}
        
        options={{
          title: "Newsup", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function NavigationComponent() {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: AppStyles.color.main,
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="MainActivity"
          options={{ drawerLabel: "Home" }}
          component={MainActivityStack}
        />

        <Drawer.Screen
          name="LatestNewsActivity"
          options={{ drawerLabel: "Latest News" }}
          component={LatestNewsActivityStack}
        />

        <Drawer.Screen
          name="SettingsActivity"
          options={{ drawerLabel: "Settings" }}
          component={SettingsActivityStack}
        />
      </Drawer.Navigator>
  );
}

export default NavigationComponent;

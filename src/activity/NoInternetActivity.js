import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
    Image,
  Alert,
  BackHandler,
} from "react-native";

const NoInternetActivity = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/no_connections.png")}
        style={{ width: "30%", height: "30%" }}
        resizeMode="contain"
      />
      <Button title="Retry" onPress={props.onCheck} />
      <Button title="Exit" onPress={exitApps} />
    </View>
  );
}

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
                   { text: "Yes", onPress: () => BackHandler.exitApp() },
                 ],
                 { cancelable: false }
               );
};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default NoInternetActivity;

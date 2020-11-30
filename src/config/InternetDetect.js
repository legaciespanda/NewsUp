import NetInfo from '@react-native-community/netinfo';
import { Alert, BackHandler } from "react-native";
import RNExitApp from "react-native-exit-app";

export const checkConnected = ()=>{
    return NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        if (state.isConnected) {
        //Alert.alert("You are online!");
        } else {
            Alert.alert(
              "Error in Internet Connection",
              "To use DigiWigi, you must be connected to a Wi-Fi or turn on data",
              [
                {
                  text: "No",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                { text: "Yes", onPress: () => BackHandler.exitApp },
              ],
              { cancelable: false }
            );
          }
        return state.isConnected;
      });
}

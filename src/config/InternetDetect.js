import NetInfo from '@react-native-community/netinfo';
import {
  Alert,
} from "react-native";

export const checkConnected = ()=>{
    return NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);
        if (state.isConnected) {
        //Alert.alert("You are online!");
          } else {
            Alert.alert("Sorry! But you need an active internet connection to proceed");
          }
        return state.isConnected;
      });
}

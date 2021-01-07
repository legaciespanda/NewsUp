import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";


//async function to open app inapp web browser
const HandleWebBrowserAsync = async (url) => {
    try {
        //_addLinkingListener();
        await WebBrowser.openBrowserAsync(url);
        //only calls this method in IOS Devices as it only
        //works for IOS Devices
        // if (Constants.platform.ios) {
        // _removeLinkingListener();
        // }
    } catch (error) {
        Alert.alert("Error:", error.message);;
        console.log("Error:" + error.message);
    }
};
//////////////////////////////////////////////////////
//redirect the user back to the app
  const _handleRedirect = (event) => {
    if (Constants.platform.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }
  };
  
  //adds event listener when the url is open in a webrowser
  //and also handles redirect back to the app.
    const _addLinkingListener = () => {
        Linking.addEventListener("url", _handleRedirect());
    };
//removes event listener from the app
    const _removeLinkingListener = () => {
        Linking.removeEventListener("url", _handleRedirect());
    };
/////////////////////////////////////////////////////////////////////

export default HandleWebBrowserAsync;

import * as React from "react";
import { Button, StyleSheet, Text, View, Linking }    from "react-native";
import * as WebBrowser from "expo-web-browser";
import Constants from "expo-constants";


const OpenDigiWigiWebBrowser = async (props) => {
// openBrowserAsync requires that you subscribe to Linking events and the
  // resulting Promise only contains information about whether it was canceled
  // or dismissed
    try {
      _addLinkingListener();
      let result = await WebBrowser.openBrowserAsync(
        // We add `?` at the end of the URL since the test backend that is used
        // just appends `authToken=<token>` to the URL provided.
        // `https://backend-xxswjknyfi.now.sh/?linkingUri=${Linking.makeUrl("/?")}`
        `${props.newsurl}`
      );

      // https://github.com/expo/expo/issues/5555
      if (Constants.platform.ios) {
        _removeLinkingListener();
      }

    //   this.setState({ result });
    } catch (error) {
      alert(error);
      console.log(error);
    }

}

  _handleRedirect = (event) => {
    if (Constants.platform.ios) {
      WebBrowser.dismissBrowser();
    } else {
      _removeLinkingListener();
    }

      let data = Linking.parse(event.url);
      
    //this.setState({ redirectData: data });

  _addLinkingListener = () => {
    Linking.addEventListener("url", _handleRedirect());
  };

  _removeLinkingListener = () => {
    Linking.removeEventListener("url", _handleRedirect());
  };
};
  

export default OpenDigiWigiWebBrowser;

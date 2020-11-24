// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import { Button, View, Text, SafeAreaView } from "react-native";

const SecondActivity = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            No Internet Access!
          </Text>
          <Button
            title="Refresh"
            onPress={() => navigation.navigate("Settings")}
          />
        </View>
        <Text style={{ fontSize: 18, textAlign: "center", color: "grey" }}>
          Under Development by Megtrix
        </Text>
        <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
          www.megtrix.com
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SecondActivity;

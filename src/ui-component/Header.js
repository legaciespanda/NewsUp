import React, { memo } from "react";
import { StyleSheet, Text } from "react-native";
import { theme } from "../core/Theme";

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        color: theme.colors.primary,
        fontWeight: "bold",
        paddingVertical: 14
    }
});

export default memo(Header);

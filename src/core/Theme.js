import { DefaultTheme } from "react-native-paper";
import { AppStyles } from "../config/AppStyles";

export const theme = {
         ...DefaultTheme,
         colors: {
           ...DefaultTheme.colors,
           primary: AppStyles.color.deepblue,
           secondary: "#414757",
           error: "#f13a59",
           success: "#00B386",
         },
       };

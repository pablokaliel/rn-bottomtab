import { StyleSheet, Platform, StatusBar } from "react-native";
const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
  },
});

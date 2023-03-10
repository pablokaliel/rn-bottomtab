import { StyleSheet, Platform, StatusBar } from "react-native";
const statusBarHeight = StatusBar.currentHeight;

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#040316",
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
  },
  Content: {
    alignSelf: "center",
    flex: 1,
    width: "98%",
    height: 120,
    marginBottom: 20,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
});

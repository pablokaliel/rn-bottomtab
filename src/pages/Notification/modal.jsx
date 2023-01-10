import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const statusBarHeight = StatusBar.currentHeight;

export function ActionModal({ handleClose, handleDelete, handleVer }) {
  return (
    <SafeAreaView style={styles.Container}>
      <TouchableOpacity
        style={{ flex: 1, zIndex: 9 }}
        onPress={handleClose}
      ></TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionBtn} onPress={handleVer}>
          <Text style={styles.actionText}>Ver</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn} onPress={handleDelete}>
          <Text style={styles.cancelText}>Excluir</Text>
        </TouchableOpacity>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginBottom: 70,
    paddingTop: Platform.OS === "android" ? statusBarHeight : 25,
  },
  content: {
    marginVertical: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  actionBtn: {
    zIndex: 99,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, 0.2",
    shadowColor: "rgba(0,0,0 0.3)",
    elevation: 5,
  },
  actionText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  cancelText: {
    color: "#f00",
    textAlign: "center",
  },
});

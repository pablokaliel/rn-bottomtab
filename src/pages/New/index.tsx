import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Button,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { styles } from "./styles";

export function New() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <SafeAreaView style={styles.Container}>
      <View>
        <Camera style={{ width: "100%", height: "100%" }} type={type}>
          <View>
            <TouchableOpacity onPress={toggleCameraType}>
              <Text>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

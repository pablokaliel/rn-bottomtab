import React from "react";
import { SafeAreaView,View, Text, ScrollView,StatusBar } from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.Container}>
     <ScrollView>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
      <View style={styles.Content}>
        <Text>Contéudo Home</Text>
      </View>
     </ScrollView>
     <StatusBar/>
    </SafeAreaView>
  );
}

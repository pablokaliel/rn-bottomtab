import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


export function Profile() {
  return (
    <View style={styles.Container}>
      <Text>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
Container:{
  flex:1,
  alignItems: 'center',
  justifyContent:"center",
}
})
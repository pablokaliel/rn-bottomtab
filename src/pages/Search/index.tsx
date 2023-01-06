import React from 'react';
import { View,Text,StyleSheet } from 'react-native';


export function Search() {
  return (
    <View style={styles.Container}>
      <Text>Pesquisar</Text>
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
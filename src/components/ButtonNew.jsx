import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import {Entypo} from "@expo/vector-icons"


export function ButtonNew({size,color}) {
  return (
    <View style={styles.Container} >
      <Entypo name='plus' color={color} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
   width:60,
   height:60,
   borderRadius:30,
   alignItems:'center',
   backgroundColor:"#3eccf5",
   justifyContent:'center',
   marginBottom:20,
  }
  })
import { View, Text, ActivityIndicator, useColorScheme } from 'react-native'
import React from 'react'
import {Colors} from '../constants/Colors'
import ThemedView from './ThemedView'

const ThemedLoader = ({...props}) => {
    const theme = Colors[useColorScheme()] ?? Colors.light
  return (
   <ThemedView style={{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
   }}>
     <ActivityIndicator size= "large" color = {theme.text}/>
   </ThemedView>
  )
}

export default ThemedLoader
import {  Text,useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedText = ({style, title = false, ...props}) => {
    const theme = Colors[useColorScheme()] ?? Colors.light;
    const textColor = title ? theme.title : theme.text;
  return (
    
      <Text style = {[{color: textColor},style]} {...props} />
     
    
  )
}

export default ThemedText
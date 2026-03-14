import { useColorScheme,TextInput } from 'react-native'
import { Colors } from '../constants/Colors'
import React from 'react'

const ThemedTextInput = ({style, ...props}) => {
    const theme = Colors[useColorScheme()] ?? Colors.light;
  return (

    <TextInput
    style = {[
        {
            backgroundColor: theme.textInputBackground,
            color: theme.text,
            padding:20,
            borderRadius: 10,
        },
        style,
    
    ]}
    {...props}
    />
   
  )
}

export default ThemedTextInput


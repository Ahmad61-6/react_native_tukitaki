import { View, Text ,StyleSheet, useColorScheme} from 'react-native'
import{ Colors } from '../constants/Colors'
import React from 'react'

const ThemedCard = ({style, children,...props}) => {
    const theme = Colors[useColorScheme()] ?? Colors.light;
  return (
    <View style = {[{backgroundColor: theme.uiBackground}, styles.card,style]}{...props}>
        {children}
     
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius:5,
        padding:20
    }
})
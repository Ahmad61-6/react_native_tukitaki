import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import Spacer from '../../components/Spacer'
import ThemedText from '../../components/ThemedText'

const Books = () => {
  return (
   <ThemedView style={styles.container} safe = {true}>
    <Spacer />
    <ThemedText title={true} style={styles.heading}>Your reading list</ThemedText>
   </ThemedView>
  )
}

export default Books

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        alignItems:"stretch"
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'

const Profile
 = () => {
  return (
   <ThemedView style={styles.container}>
    <ThemedText title={true} style={styles.heading}>Your Email</ThemedText>
    <Spacer />
    <ThemedText>Time to start reading some books!</ThemedText>
   </ThemedView>
  )
}

export default Profile


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        fontWeight:"bold",
        fontSize:18,
        textAlign:"center"
    }
})
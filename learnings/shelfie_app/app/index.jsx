import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Logo from '../assets/img/logo_light.png'
const Home = () => {
  return (
    <View style={styles.container}>
        <Image source = {Logo} style = {styles.img}></Image>
      <Text style = {[styles.title, {color:'purple'}] }>Number 1</Text>
        <Text style ={{marginBottom: 20}}>Reading list app</Text>



    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
    },
    
    img: {
        marginVertical: 20,
    }
})
import React from 'react';
import { StyleSheet,useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors'; 
import ThemedView from '../components/ThemedView'; 
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

const Home = () => {
    const linkBorderColor = Colors[useColorScheme()]?.text || Colors.light.text;
  return (
    <ThemedView style={styles.container}>
      
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText style={[styles.title]} title = {true}>The Number 1</ThemedText>
     <Spacer height={10}/>
      
      <ThemedText>Reading list app</ThemedText>
      <Spacer />
      
      <Link href="/login" style={[styles.link, {borderBottomColor: linkBorderColor}]}>
        <ThemedText> Login Page</ThemedText>
      </Link>
      
      <Link href="/register" style={[styles.link, {borderBottomColor: linkBorderColor}]}>
        <ThemedText>
             Register Page
       </ThemedText>
      </Link>
       <Link href="/profile" style={[styles.link, {borderBottomColor: linkBorderColor}]}>
        <ThemedText>
             Profile Page
       </ThemedText>
      </Link>

    </ThemedView>
  );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    
    link: {
        marginVertical: 10,
        borderBottomWidth: 1,
    }
});
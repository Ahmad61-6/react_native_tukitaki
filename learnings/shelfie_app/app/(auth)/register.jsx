import { StyleSheet } from 'react-native'
import React from 'react' 

// themed components
import ThemedView from '../../components/ThemedView'; 
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import { Link } from 'expo-router'; 

const Register = () => {
  return (
    <ThemedView style = {styles.container}>

        <Spacer />
        <ThemedText style = {styles.title} title = {true}>Register for an account</ThemedText>

        <Spacer height={100}/>
        <Link href="/login" style = {styles.link}>
            <ThemedText style = {{textAlign: 'center'}}>Already have an account? Login</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
})
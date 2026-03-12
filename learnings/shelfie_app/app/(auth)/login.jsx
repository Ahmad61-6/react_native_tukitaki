import { StyleSheet,Text,TextInput } from 'react-native'
import { Link } from 'expo-router'; 
import React, { useState } from 'react' 

// themed components
import ThemedView from '../../components/ThemedView'; 
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log("Login button pressed, email:", email, "password:", password);
  } 

  return (


    <ThemedView style = {styles.container}>

        <Spacer />
        <ThemedText style = {styles.title} title = {true}>Login to your account</ThemedText>

      <ThemedTextInput 
      style={
        {
          width: '80%',
          marginBottom: 20,

        }
      }
      placeholder='Email'
      keyboardType = 'email-address'
      onChangeText = {setEmail}
      value = {email}

      />
      <ThemedTextInput 
      style={
        {
          width: '80%',
          marginBottom: 20,

        }
      }
      placeholder='Password'
      onChangeText = {setPassword}
      value = {password}
      secureTextEntry = {true}
      />


        <ThemedButton onPress={handleSubmit}>
          <Text style = {{color: '#f2f2f2'}}>Login</Text>
        </ThemedButton>

        <Spacer height={100}/>
        <Link href="/register" style = {styles.link}>
            <ThemedText style = {{textAlign: 'center'}}>Don't have an account? Register</ThemedText>
        </Link>

    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
 
})
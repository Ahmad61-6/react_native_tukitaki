import { Keyboard, StyleSheet ,Text,TouchableWithoutFeedback } from 'react-native'


// themed components
import ThemedView from '../../components/ThemedView'; 
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';
import { Link } from 'expo-router'; 
import React, { useState } from 'react' 
import { useUser } from '../../hooks/useUser';
import {Colors} from '../../constants/Colors'
import ThemedLoader from '../../components/ThemedLoader';



const Register = () => {
   const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register} = useUser();
    
  const handleSubmit = async () => {
    try{
      setLoading(true);
      setError('');
      await register(email, password);
      setEmail("");
      setPassword("");
      console.log("Registration successful");
    }catch(error){
      setError(error.message || 'Registration failed');
      console.error("Register error:", error);
    }finally{
      setLoading(false);
    }
  }
  return (
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <ThemedView style = {styles.container}>

        <Spacer />
        <ThemedText style = {styles.title} title = {true}>Register for an account</ThemedText>
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


        {loading ? <ThemedLoader></ThemedLoader>: <ThemedButton onPress={handleSubmit} disabled={loading}>
          <Text style={{ color: '#f2f2f2' }}>Register</Text>
        </ThemedButton>}

        <Spacer/>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={100}/> 
        <Link href="/login" style = {styles.link}>
            <ThemedText style = {{textAlign: 'center'}}>Already have an account? Login</ThemedText>
        </Link>

    </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Register

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
  error:{
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderRadius: 6,
    marginHorizontal: 10
  }
})
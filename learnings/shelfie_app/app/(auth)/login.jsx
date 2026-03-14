import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { useState } from 'react'
import { useUser } from "../../hooks/useUser";
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from "../../components/ThemedTextInput"
import {Colors} from '../../constants/Colors'
import ThemedLoader from '../../components/ThemedLoader';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)
  const [isloading, setIsLoading] = useState(false)
  const {login} = useUser();

  const handleSubmit = async () => {
    try{
      setIsLoading(true)
      setError(null)
      await login(email,password)
      setEmail("")
      setPassword("")
    }catch(error){
      setError(error?.message || 'Login failed')
    }
    finally{
      setIsLoading(false)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Login to Your Account
        </ThemedText>

        {/* <TextInput placeholder="Email" /> */}

        <Spacer />
        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <ThemedTextInput
          style={{ marginBottom: 20, width: "80%" }}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {isloading ? <ThemedLoader></ThemedLoader>: <ThemedButton onPress={handleSubmit} disabled={isloading}>
          <Text style={{ color: '#f2f2f2' }}>login</Text>
        </ThemedButton>}
        
        <Spacer/>
        {error && <ThemedText style={styles.error}>{error}</ThemedText>}

        <Spacer height={100} />
        <Link href="/register" replace>
          <ThemedText style={{ textAlign: "center" }}>
            Register instead
          </ThemedText>
        </Link>

      </ThemedView>
    </TouchableWithoutFeedback>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
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
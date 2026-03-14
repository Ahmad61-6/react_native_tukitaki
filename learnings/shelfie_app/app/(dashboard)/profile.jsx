import { StyleSheet, Text, View } from 'react-native'
import React, { use, useState } from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { useUser } from '../../hooks/useUser'
import ThemedButton from '../../components/ThemedButton'
import {Colors} from '../../constants/Colors'
import ThemedLoader from '../../components/ThemedLoader';

const Profile
 = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const {logout,user} = useUser()

    const handleLogout = async() => {
        try{
            setLoading(true)
            setError(null)
            await logout()

        }catch (error){
            setError(error?.message || 'Logout failed')
        }
        finally{
            setLoading(false)
        }
        
    }
  return (
   <ThemedView style={styles.container}>
    <ThemedText title={true} style={styles.heading}>{user?.email || 'Email'}</ThemedText>
    <Spacer />
    <ThemedText>Time to start reading some books!</ThemedText>
    <Spacer/>
     {loading ? <ThemedLoader></ThemedLoader>: <ThemedButton onPress={handleLogout} disabled={loading}>
          <Text style={{ color: '#f2f2f2' }}>Logout</Text>
        </ThemedButton>}
    <Spacer/>
    {error && <ThemedText style={styles.error}>{error}</ThemedText>}
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
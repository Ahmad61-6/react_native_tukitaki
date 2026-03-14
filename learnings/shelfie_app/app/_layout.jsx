import { Slot, Stack } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import {Colors} from "../constants/Colors"
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'


const RootLayout
 = () => {
    const colorScheme = useColorScheme();
    console.log(colorScheme);
    const theme = Colors[colorScheme] ?? Colors.light; 
  return (
    <UserProvider>
    <StatusBar style = "auto"/>
        <Stack screenOptions = {{headerTitleAlign: 'center',headerTitleStyle: {fontWeight: 'bold'},
        headerStyle: {backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        }} >
            {/* <Stack.Screen name="(tabs)" options={{headerShown: false}}/> */}
            <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name = "(auth)" options={{headerShown: false}}/>
        <Stack.Screen name = "(dashboard)" options={{headerShown: false}}/>
        <Stack.Screen name = "flexdirection" options={{title: "Flex Direction"}} />
        </Stack>
        </UserProvider> 

  )
}

export default RootLayout


const styles = StyleSheet.create({})
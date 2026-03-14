import { createContext, useEffect, useState } from "react"
import {account} from "../lib/appwrite"
import { ID } from "react-native-appwrite"
import { resolveScheme } from "expo-linking"
import { useSafeAreaFrame } from "react-native-safe-area-context"
export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  async function login(email, password) {
  try{
      if (!email) throw new Error("EMAIL_EMPTY");
    if (!password) throw new Error("PASSWORD_EMPTY");
 await account.createEmailPasswordSession({
    email: email, 
    password: password
});
const response = await account.get()
// console.log("Login successful: ",response)
setUser(response)

  }catch(error){
    console.error("Login error: ", error)
    if (error.message === "EMAIL_EMPTY") {
      alert("Please enter your email address.");
    } else if (error.message === "PASSWORD_EMPTY") {
      alert("Please enter your password.");
    } else {
      alert(error.message); 
    }
  }

  }

  async function register(email, password) {
      try {
      
    await account.create({
      userId: ID.unique(),
      email,
      password
    });

    await login(email, password);

  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  } 
  }

  async function logout() {
    try{
      await account.deleteSession({
        sessionId: "current"
      })
      console.log("Logout done")
      setUser(null)
    } catch (error) {
      console.error("Logout error: ", error)
      throw error
    }
  }

  async function getInitialUserValue(){
    try{
      const response = await account.get()
      setUser(response)

    }catch (error){
      setUser(null)
    }finally{
      setAuthChecked(true)
    }
  }
  
  useEffect(() =>{
    getInitialUserValue()
  }, [])


  return (
    <UserContext.Provider value={{ 
      user, login, logout, register, authChecked
    }}>
      {children}
    </UserContext.Provider>
  );
}
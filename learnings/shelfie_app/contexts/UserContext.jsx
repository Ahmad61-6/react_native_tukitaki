import { createContext, useState } from "react"
import {account} from "../lib/appwrite"
import { ID } from "react-native-appwrite"
export const UserContext = createContext()

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  async function login(email, password) {
  try{
 await account.createEmailPasswordSession({
    email: email, 
    password: password
});
const response = await account.get()
console.log("Login successful: ",response)
setUser(response)


  }catch(error){
    console.error("Login error: ", error)
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
    return setUser;

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
    } catch (error) {
      console.error("Logout error: ", error)
    }

  }

  return (
    <UserContext.Provider value={{ 
      user, login, logout, register,
    }}>
      {children}
    </UserContext.Provider>
  );
}
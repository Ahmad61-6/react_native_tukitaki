import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { createContext, useEffect, useState } from "react";
import { MOCK_USERS } from "../constants/data";

const authStorageKey = "auth-key";
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const storeAuthState = async (newState) => {
    try {
      const jsonValue = JSON.stringify(newState);
      await AsyncStorage.setItem(authStorageKey, jsonValue);
    } catch (error) {
      console.log("Error saving", error);
    }
  };

  function login(userName, password) {
    if (userName && password) {
      setUser({ user_name: userName });
      setIsLoggedIn(true);
      storeAuthState({ isLoggedIn: true });
      router.replace("/(protected)");
    } else {
      console.log("Please enter both email and password.");
    }
  }

  function logout() {
    setIsLoggedIn(false);
    setUser(null);
    storeAuthState({ isLoggedIn: false });
  }

  function register(username, email, password) {
    if (username && email && password) {
      const existingUser = MOCK_USERS.find(
        (u) => u.username.toLowerCase() === username.toLowerCase(),
      );

      if (existingUser) {
        console.log("Error: That username is already taken!");
        return { success: false, message: "Username is already taken" };
      }

      console.log("Registration successful!");
      setUser({
        username: username,
        email: email,
      });
      setIsLoggedIn(true);
      storeAuthState({ isLoggedIn: true });
      router.replace("/(protected)");

      return { success: true };
    }

    return { success: false, message: "Please fill out all fields" };
  }

  useEffect(() => {
    const getAuthFromStorage = async () => {
      try {
        const value = await AsyncStorage.getItem(authStorageKey);
        if (value !== null) {
          const auth = JSON.parse(value);
          setIsLoggedIn(auth.isLoggedIn);
        }
      } catch (error) {
        console.log("error fetching from the storage", error);
      }
      setIsReady(true);
    };
    getAuthFromStorage();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isReady, user, isLoggedIn, login, logout, register }}
    >
      {children}
    </AuthContext.Provider>
  );
}

import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const [user,setUser] = useState()
    const showLocalStorageData = async() =>{
        const data = await AsyncStorage.getItem("@auth");
        const loggedInUserData = JSON.parse(data);
        setUser(loggedInUserData?.user)
      }
    
      useEffect(()=>{
        showLocalStorageData()
      },[])

      return (
        <AuthContext.Provider value={[user,setUser]}>
            {children}
        </AuthContext.Provider>
      )
}
import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext =createContext(null);
export const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [teacher,setTeacher]=useState(null);

    useEffect(() => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');

  if (token && token.split('.').length === 3 && user) {
    try {
      setUser(JSON.parse(user));
    } catch (e) {
      console.error("Failed to parse stored user");
    }
  } else {
    // Do not try to decode or set anything
    console.log("No valid token or user found");
  }
}, []);

    const login =(token,user)=>{
        localStorage.setItem('token',token);
        setUser(user)
    }
    const logout=()=>{
        localStorage.removeItem('token');
        setUser(null);
    }

    const teachers=()=>{
      
    }
    const authInfo={
        user,setUser,login,logout
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
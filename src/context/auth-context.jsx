import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
});

const AuthContextProvider = ({children})=>{
    let storedToken = localStorage.getItem('token');
    const [token,setToken] = useState(storedToken);
    const isLoggedIn = !!token;

    const login = (id)=>{
        setToken(id);
        localStorage.setItem('token',token);
    };

    const logout = ()=>{
        setToken(null);
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{token:token,isLoggedIn:isLoggedIn,login:login,logout:logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;

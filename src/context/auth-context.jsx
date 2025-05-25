import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    token:'',
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}
});

const AuthContextProvider = ({children})=>{
    const [token,setToken] = useState(null);
    const isLoggedIn = !!token;

    const login = (id)=>{
        setToken(id)
    };

    const logout = ()=>{
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{token:token,isLoggedIn:isLoggedIn,login:login,logout:logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;

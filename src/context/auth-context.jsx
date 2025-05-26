import React, { createContext, useState } from "react";

export const AuthContext = createContext({
    token:'',
    isLoggedIn:false,
    email:'',
    login:()=>{},
    logout:()=>{}
});

const AuthContextProvider = ({children})=>{
    let storedToken = localStorage.getItem('token');
    let initalEmail = localStorage.getItem('email');
    const [token,setToken] = useState(storedToken);
    const [email,setEmail] = useState(initalEmail);
    const isLoggedIn = !!token;

    const login = (id,email)=>{
        setToken(id);
        setEmail(email);
        localStorage.setItem('email',email);
        localStorage.setItem('token',token);
    };

    const logout = ()=>{
        setToken(null);
        setEmail(null);
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    return (
        <AuthContext.Provider value={{token:token,isLoggedIn:isLoggedIn,email:email,login:login,logout:logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider;

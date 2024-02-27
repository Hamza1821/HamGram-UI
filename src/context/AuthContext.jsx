import { createContext,useEffect,useState } from "react";
import { json } from "react-router-dom";
export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [currentUser,setCurrentUser]=useState(
        JSON.parse(localStorage.getItem("user")|| null)
    );
     

    const login=()=>{
        setCurrentUser({
            name:'Hamza Mubin',
            img:'https://images.unsplash.com/photo-1562860149-691401a306f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        })
    }
    const currUser ={
        name:'Hamza Mubin',
        img:'https://images.unsplash.com/photo-1562860149-691401a306f8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }


    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    )
}
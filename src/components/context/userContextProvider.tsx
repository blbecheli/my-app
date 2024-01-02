'use client'

import { useState, useEffect } from "react";
import UserContext from "./userContext";



const UserContextProvider = ({ children }) => {
    const [idUser, setIdUser] = useState(null);
    const [idCookie, setIdCookie] = useState(null);
    
    useEffect(()=>{
        console.log('The new id é: ', idUser);
        console.log('The new cookie é: ', idCookie);        
    }, [idUser, idCookie])

    return (
        <UserContext.Provider value={{ idUser, setIdUser, idCookie, setIdCookie }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider

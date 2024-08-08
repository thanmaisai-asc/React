import React, { Children } from 'react'
import { useState, createContext } from 'react'

const AuthContext = createContext()

export default function AuthProvider (){
    const [user, setUser] = useState(null)
    const login = (user) => { setUser(user) }
    const logout = () => { setUser(null) }
    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {Children}
        </AuthContext.Provider>
    )
}

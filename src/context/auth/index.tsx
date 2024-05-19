'use client'

import { useState, createContext, useContext } from "react"

type AuthContextProps = {
    user: UserProps,
    login: (user: UserProps) => void,
    logout: () => void,
}

const initialState = {
    user: {name: '', email: ''},
    login: () => {},
    logout: () => {}
}

const AuthContext = createContext<AuthContextProps>(initialState)

type AuthProviderProps = {
    children: React.ReactNode
}

type UserProps = {
    name: string,
    email: string,
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [user, setUser] = useState<UserProps>({name: '', email: ''})

    const login = (user: UserProps) => {
        setUser(user)
        console.log(user)
    }

    const logout = () => {
        setUser({name: '', email: ''})
        console.log('logout')
    }
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)
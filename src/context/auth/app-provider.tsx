import { AuthProvider } from "."

type AppProviderProps = {
    children: React.ReactNode
}

export default function AppProvider ({children}: AppProviderProps) {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}
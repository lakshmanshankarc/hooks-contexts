import { ReactNode, createContext, useState } from "react";

interface userContextType{
    name: string,
    email: string,
    password: string,
    changeName: (name: string) => void,
    changeEmail: (email: string) => void,
    changePassword: (password: string) => void,
}
export const UserContext = createContext<userContextType | undefined>(undefined)

export default function UserProvider({ children }: { children: ReactNode }) {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const changeName = (name: string) => setName(name)
    const changeEmail = (email: string) => setEmail(email)
    const changePassword = (password: string) => setPassword(password)

    const localValue: userContextType = {
        name,
        email,
        password,
        changeName,
        changeEmail,
        changePassword,
    }
    return (
        <UserContext.Provider value={localValue}>
            {children}
        </UserContext.Provider>
    )
}
    
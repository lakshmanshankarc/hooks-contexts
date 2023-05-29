import { ReactNode, useState, createContext } from "react";

interface DarkModeContextType {
    isDark: boolean,
    changeTheme: () => void
}
export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined); // 1

export default function DarkModeProvider({ children }: { children: ReactNode }) {
    const [dark, setDark] = useState<boolean>(true); 
    const changeTheme = () => setDark(!dark);        
    const DarkMode: DarkModeContextType = {       
        isDark:dark,
        changeTheme,
    }
    return <DarkModeContext.Provider value={DarkMode}>{children}</DarkModeContext.Provider>
}

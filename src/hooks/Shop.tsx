import {  ReactNode, createContext, useState } from "react"

interface DarkModeContextType{
  isDark: boolean,
  changeTheme:()=>void,
}
export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined)
// creating context

function DarkMode({children}:{children:ReactNode}) {
  const [isDark, setDark] = useState<boolean>(true);
  const changeTheme = () => {
    setDark(!isDark);
  }

  // assigning context values
  const darkMode: DarkModeContextType = {
    isDark,
    changeTheme,
  }

  return (
    <div>
      <DarkModeContext.Provider value={darkMode}>
        {children}
      </DarkModeContext.Provider>
    </div>
  )
}
export default DarkMode;


// function ColorChild() {
//   const theme = useContext(DarkModeContext);
//   return (
//     <>
      // <button onClick={() => theme?.changeTheme()}>
      //   ChangeTheme
      // </button>
//     </>
//   )
// }


// function AnotherChild() {
//   const theme = useContext(DarkModeContext);
//   if (theme?.isDark) {
//     return <h1>DarkMode</h1>
//   } else {
//     return <h1>LightMode</h1>
//   }
// }
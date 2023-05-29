// import ClassicCounter from './hooks/usestate'
// import Statfeull from './hooks/state'
import { useContext } from "react"
import "./App.css"
import Memoize from "./hooks/Caching/useMemo"
import { DarkModeContext } from "./hooks/DarkContext/Provider"

function App() {
  const theme=useContext(DarkModeContext)
  return (
    <>
      <Memoize />
      <button onClick={() => theme?.changeTheme()}>
        ChangeTheme
      </button>
      <AnotherChild/>
    </>
  )
}
export default App


function AnotherChild() {
  const theme = useContext(DarkModeContext);
  if (theme?.isDark) {
    return <h1>DarkMode</h1>
  } else {
    return <h1>LightMode</h1>
  }
}
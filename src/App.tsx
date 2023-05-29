
import "./App.css"
import { useContext, useEffect, useState } from "react"
import { DarkModeContext } from "./hooks/DarkContext/Provider"

import { UserContext } from "./hooks/UserContext/Provider"

function App() {
  const theme = useContext(DarkModeContext)

  const [themeColor, setThemeColor] = useState<string>("Black");

  useEffect(() => {
    if (theme?.isDark) {
      setThemeColor("black");
    } else {
      setThemeColor("white");
    }
  }, [theme?.isDark])

  return (
    <div style={{ background: themeColor }}>
      <button onClick={() => theme?.changeTheme()}>
        ChangeTheme
      </button>
      <AnotherChild />

      <CheckUserContext />
      <AnotherChild2 />
    </div>
  )
}
export default App


function AnotherChild() {
  const theme = useContext(DarkModeContext);
  if (theme?.isDark) {
    return <h1 className="orange">DarkMode</h1>
  } else {
    return <h1 className="orange">LightMode</h1>
  }
}


function CheckUserContext() {
  const user = useContext(UserContext)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "username") user?.changeName(value);
    if (name == "password") user?.changePassword(value);
    if (name == "email") user?.changeEmail(value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user?.name, user?.email, user?.password)
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">UserName</label>
        <input type="text" name="username" onInput={handleChange} />

        <label htmlFor="">Email</label>
        <input type="email" name="email" onInput={handleChange} />

        <label htmlFor="passworl">passwork</label>
        <input type="password" name="password" onInput={handleChange} />

        <input type="submit" value="submit" />
      </form>

    </>
  )
}


function AnotherChild2() {
  const user = useContext(UserContext)
  console.log(user?.name, user?.email, user?.password)

  return (
    <>
      <h1>{user?.name}</h1>
      <h1>{user?.email}</h1>
      <h1>{user?.password}</h1>
    </>
  )
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import DarkModeProvider from './hooks/DarkContext/Provider.tsx' // adding darkmode Context
import UserProvider from './hooks/UserContext/Provider.tsx'  // adding user Context


// import { UserContext } from './hooks/UserContext/Provider.tsx' //trick to get the user context
// import { useContext } from 'react'
// function DeleteMe() {
//   const user = useContext(UserContext)
//   console.log(user?.name, user?.email, user?.password) // this will be undefined because we are not using the out of the box state
//   return (
//     <>
//       <h1>{user?.name}</h1>
//       <h1>{user?.email}</h1>
//       <h1>{user?.password}</h1>
//     </>
//   )
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DarkModeProvider>
      <UserProvider>
        <App />
      </UserProvider>
      {/* <DeleteMe /> */}
    </DarkModeProvider>
  </React.StrictMode>,
)

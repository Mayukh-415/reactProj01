import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage()
  // },)
  const [user, setUser] = useState(null)

  const loginHandler = (email, password) =>{
    if(email == "a@b" && password == "123"){
      console.log("Admin logged")
    }else{
      alert("Invalid Credentials")
    }
  }
  return (
      <>
      {/* <Login/>
      {!user ? <Login loginHandler={loginHandler}/> : ''} */}
      {/* <EmployeeDashboard /> */}
      <AdminDashboard />
      </>
  )
}

export default App
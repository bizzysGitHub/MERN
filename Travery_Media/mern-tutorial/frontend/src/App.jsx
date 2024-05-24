// import { useState } from 'react'
import 'react-toastify/ReactToastify.css'
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from "./components/Header"

// import './App.css'

function App() {
  

  return (
    <div className="container">
    <Header />
    <Outlet/>
    <ToastContainer/>
    </div>
  )
}

export default App

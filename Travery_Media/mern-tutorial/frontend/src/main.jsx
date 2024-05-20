import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,Route,RouterProvider, createRoutesFromElements,  } from "react-router-dom";
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
// import Test from './pages/test.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route 
      element={<App />}
      path='/'
      >
       <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

    </Route>
   
    {/* <Route 
      element={<Test />}
      path='/test'
      ></Route> */}

    </>

));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

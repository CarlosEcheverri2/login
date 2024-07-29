import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './page/login/Login.jsx'
import Singup from './page/singup/Singup.jsx'
import DashBoard from './page/dashBoard/DashBoard.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AuthProvider from './auth/AuthProvider.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/singup",
    element:<Singup/>
  },
  {
    path:"/",
    element:<ProtectedRoute/>,
    children:[{
      path:"/dashboard",
      element:<DashBoard/>
    }]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router }/>
    </AuthProvider>
  </React.StrictMode>,
)

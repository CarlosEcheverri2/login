import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import { AuthContext } from "../auth/AuthProvider"; // Asegúrate de actualizar la ruta según corresponda


const ProtectedRoute = () => {

  const { isAuthenticated }  = useContext( AuthContext )

  return (
    isAuthenticated ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default ProtectedRoute
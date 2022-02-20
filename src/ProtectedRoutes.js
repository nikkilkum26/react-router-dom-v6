import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const useAuth=()=>{
    const isLoggedIn ={
        login:false
    }
    return  isLoggedIn.login
}

const ProtectedRoutes = () => {
    const userDetials=useAuth();
  return (
    <div>
        {userDetials?
        <Outlet />
        :
        <Navigate to="/login" />
    }
    </div>
  )
}

export default ProtectedRoutes
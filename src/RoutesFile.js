import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import ProtectedRoutesV2 from './ProtectedRoutesV2'
import OrderDetials from './Components/OrderDetials'
import Payments from './Components/Payments'
import Reports from './Components/Reports'
import Dashboard from './Components/Dashboard'
import ProtectedRoutes from './ProtectedRoutes'
import Logout from './Components/Logout'

const RoutesFile = () => {
  return (
    <Routes>
      {/* Single User Login */}
      <Route element ={<ProtectedRoutes/>}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path= '/logout' element={<Logout/>}/>
      </Route>

      {/* Multiple users Login */}
      {/* <Route element={<ProtectedRoutesV2/>}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/payments' element={<Payments />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/order-detials' element={<OrderDetials />} />
      </Route> */}

        {/* Public Routes */}
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path="*" element={<Navigate to='/home' />} />

    </Routes>
  )
}

export default RoutesFile
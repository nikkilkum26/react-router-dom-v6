import React from 'react'
import OrderDetials from './Components/OrderDetials'
import Payments from './Components/Payments'
import Reports from './Components/Reports'
import Dashboard from './Components/Dashboard'
import { Navigate, Route, Routes } from 'react-router-dom'

const useAuth = () => {
    const isLoggedIn = {
        user: 'admin',
        login: false
    }
    return isLoggedIn
}
const ProtectedRoutesV2 = () => {
    const userDetials = useAuth();
    switch (true) {
        case userDetials.login&&userDetials.user === 'admin':
            console.log('rendered in admin')
            return (
               
                <Routes>
                    <Route exact path='/dashboard' element={<Dashboard />} />
                    <Route exact path='/reports' element={<Reports />} />
                    <Route path="*" element={<Navigate to='/home' />} />
                </Routes>
          
            )

        case userDetials.login&&userDetials.user === 'super_admin':
            return (
                <Routes>
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/payments' element={<Payments />} />
                    <Route path='/reports' element={<Reports />} />
                    <Route path='/order-detials' element={<OrderDetials />} />
                    <Route path="*" element={<Navigate to='/home' />} />
                </Routes>
            )

        default:
           return <Routes><Route path="*" element={<Navigate to='/home' />} /></Routes>
    }
}

export default ProtectedRoutesV2
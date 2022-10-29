import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './auth'
const RequiredAuth = ({children}) => {
 const auth = useAuth();
 const navigate  = useNavigate()
 const location = useLocation();
  if(!auth.user){
         return <Navigate to="/" state={{path:location.pathname}}/>
  }
  return (
    <>
          {children}
    </>
  )
}

export default RequiredAuth
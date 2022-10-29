import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './components/auth'
const ProfileCom = () => {
     const auth = useAuth();
     const navigate  = useNavigate()
    const handleLogout = () =>{
        auth.logout();
        navigate("/")
    }

  return (
    <div>ProfileCom
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default ProfileCom
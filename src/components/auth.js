import React,{createContext,useState,useContext} from 'react'
const AuthContext =  createContext(null);


export const AuthProvider = ({children}) => {
          const [user, setUser] = useState(null);
  const login = (user)=>{
    setUser(user)
  }

  const logout = (user)=>{
    setUser(null)
  }
        


  return (
    <div>
            <AuthContext.Provider value={{user,setUser,login,logout}}>
                {children}
            </AuthContext.Provider>
    </div>
  )


  
}
export  const useAuth= () =>{
    return useContext(AuthContext)
}
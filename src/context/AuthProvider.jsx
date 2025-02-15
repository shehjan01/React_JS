import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorege, setLocalStorege } from '../utils/localstorage';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorege(); 
    const {employees} = getLocalStorege();
    setUserData(employees);
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
    {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
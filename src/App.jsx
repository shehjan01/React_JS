import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);  
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedinUserData, setLoggedinUserData] = useState(null);

  useEffect(() => {
    const loggedinUser = localStorage.getItem('loggedinUser');
    if (loggedinUser) {
      const userData = JSON.parse(loggedinUser);
      setUser(userData);
      setLoggedinUserData(userData.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { role: 'admin' };
      setUser(adminUser);
      localStorage.setItem('loggedinUser', JSON.stringify(adminUser));
    } else if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        const employeeUser = { role: 'employee', data: employee };
        setUser(employeeUser);
        setLoggedinUserData(employee);
        localStorage.setItem('loggedinUser', JSON.stringify(employeeUser));
      } else {
        alert('Invalid Credentials');
      }
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={`/${user.role}`} />} />
        <Route path="/admin" element={user?.role === 'admin' ? <AdminDashboard changeUser={setUser} /> : <Navigate to="/" />} />
        <Route path="/employee" element={user?.role === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedinUserData} /> : <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

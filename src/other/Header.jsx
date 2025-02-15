import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Header = (props) => {
  const [userData] = useContext(AuthContext);
  const [name, setName] = useState('');

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'));

    const users = [...employees, ...admin];
    console.log(loggedinUser);
     if(loggedinUser.role=='employee'){ 
     setName(loggedinUser.data.firstname);
    }
    else if(loggedinUser.role=='admin'){
      setName('Admin');
    }
  }, [userData]);

  const logedoutUser = () => {
    localStorage.removeItem('loggedinUser');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{name} 👋</span>
      </h1>
      <button
        onClick={logedoutUser}
        style={{ padding: "2px 5px" }}
        className='bg-red-600 text-lg font-medium text-white rounded-sm py-1/5 px-1' 
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

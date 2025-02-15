import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = () => {
  const [userData] = useContext(AuthContext);
  const [employeeTasks, setEmployeeTasks] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    const loggedInEmployee = storedEmployees.find(emp => emp.firstname === userData.firstname);
    if (loggedInEmployee) {
      setEmployeeTasks(loggedInEmployee.tasks);
    }
  }, [userData]);

  return (
    <div>
      {employeeTasks.length > 0 ? (
        employeeTasks.map((data, index) => (
          <div key={index} className='h-full w-[300px] bg-green-400 rounded-xl p-5 flex-shrink-0'>
            <div className='flex justify-between items-center'>
              <h3 style={{ padding: "4px 12px" }} className='text-sm py-1 px-3 bg-red-600 rounded'>{data.category}</h3>
              <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='text-xl font-semibold mt-5'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>
            <div className='mt-8'>
              <button className='bg-blue-500 rounded-sm cursor-auto'>Accept Task</button>
            </div>
          </div>
        ))
      ) : (
        <p>No tasks assigned yet.</p>
      )}
    </div>
  );
}

export default NewTask;

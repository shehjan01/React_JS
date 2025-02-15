import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData]=useContext(AuthContext);
  return (
  <div className='rounded bg-[#1c1c1c] mt-5 p-5'>
  <div className='bg-red-400 flex justify-center items-center py-2 px-4 mb-2'>
      <h3 className='text-lg w-1/5'>Employee Name</h3>
      <h2 className='text-lg w-1/5'>New Task</h2>
      <h5 className='text-lg w-1/5'>Active Task</h5>
      <h5 className='text-lg w-1/5'>Completed</h5>
      <h5 className='text-lg w-1/5'>Failed</h5>
    </div>
    <div className=''>
    {userData.map(function(elem,idx){
    return <div key={idx} style={{padding:"8px 16px", marginBottom:"8px"}} className='bg-black flex justify-center items-center border-2 border-emerald-600'>
      <h2 className='w-1/5 font-medium text-xl text-white'>{elem.firstname}</h2>
      <h3  className='w-1/5 font-medium text-xl text-blue-400'>{elem.taskSummary.newTask}</h3>
      <h5 className='w-1/5 font-medium text-xl text-yellow-500'>{elem.taskSummary.active}</h5>
      <h5 className='w-1/5 font-medium text-xl text-white'>{elem.taskSummary.completed}</h5>
      <h5  className='w-1/5 font-medium text-xl text-red-400'>{elem.taskSummary.failed}</h5>
    </div>
  })}
    </div>
  </div>
  )
}

export default AllTask

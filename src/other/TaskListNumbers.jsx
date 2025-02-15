import React from 'react';

const TaskListNumbers = ({ data }) => {
  return (
    <div className='mt-10 flex justify-between gap-5 screen'>
      <div className=' w-[45%] py-2 px-2 bg-blue-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskSummary.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className=' w-[45%] py-2 px-2 bg-green-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskSummary.completed}</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
      </div>
      <div className=' w-[45%] py-2 px-2 bg-yellow-500 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskSummary.active}</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
      </div>
      <div className=' w-[45%] py-2 px-2 bg-red-400 rounded-xl'>
        <h2 className='text-2xl font-semibold'>{data.taskSummary.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;

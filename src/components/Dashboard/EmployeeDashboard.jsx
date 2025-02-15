import React from 'react';
import Header from '../../other/Header';
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = (props) => {
  return (
    <div className='bg-[#1c1c1c] h-screen p-10'>
        <Header changeUser={props.changeUser} data={props.data}/>  
        <TaskListNumbers data={props.data}/>  
        <TaskList data={props.data}/>
    </div>
  );
};

export default EmployeeDashboard;

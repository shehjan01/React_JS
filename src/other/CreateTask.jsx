import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [description, setDescription] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedData = [...userData];
    const employeeIndex = updatedData.findIndex(emp => emp.firstname === assignTo);
    
    if (employeeIndex !== -1) {
      const newTask = {
        taskTitle,
        taskDate,
        category,
        description,
        active: true,
        newTask: true,
        completed: false,
        failed: false
      };
      updatedData[employeeIndex].tasks.push(newTask);

      updatedData[employeeIndex].taskSummary.active += 1;
      updatedData[employeeIndex].taskSummary.newTask += 1;

      setUserData(updatedData);
      localStorage.setItem('employees', JSON.stringify(updatedData));

      setTaskTitle('');
      setTaskDate('');
      setDescription('');
      setAssignTo('');
      setCategory('');
    } else {
      alert('Employee not found!');
    }
  };

  return (
    <div className="p-5 mt-7 bg-[#1c1c1c] rounded">
      <form onSubmit={submitHandler} className="flex flex-wrap justify-between">
        <div className="w-1/2">
          <div className="mt-4">
            <h3 className="text-gray-300 text-sm">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Enter The Task"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-300 text-sm">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="date"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-300 text-sm">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Assign To Employee Name"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-gray-300 text-sm">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm w-4/5 rounded outline-none bg-transparent border border-gray-400"
              type="text"
              placeholder="Enter The Task Category"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="mt-4 text-sm text-gray-300">Description</h3>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm rounded outline-none border border-gray-400 p-2"
            cols="30"
            rows="10"
            placeholder="Enter The Task Description"
          />
          <button
            className="bg-emerald-500 hover:bg-emerald-600 w-full mt-4 py-2 text-white font-semibold rounded"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

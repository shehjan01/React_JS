import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-72 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="px-3 py-1 text-sm bg-red-600 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">{data.taskDescription}</p>
      <div className="mt-6 flex justify-between">
        <button className="px-2 py-1 bg-green-500 text-sm rounded-sm">Mark as Completed</button>
        <button className="px-2 py-1 bg-red-500 text-sm rounded-sm">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;

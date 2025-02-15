import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 p-5 h-full w-72 bg-yellow-500 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="px-3 py-1 text-sm bg-red-600 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">{data.taskDescription}</p>
      <div className="mt-6 flex justify-between">
            <button className='w-full rounded-sm bg-red-500'>Failed Task</button>
          </div>
        </div>
  )
}

export default FailedTask

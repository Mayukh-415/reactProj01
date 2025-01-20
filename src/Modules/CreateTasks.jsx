import React from 'react'

const CreateTasks = () => {
  return (
    <div className='bg-[#1C1C1C] p-2'>
    <form className='flex flex-wrap items-start justify-between w-full'>
        <div className='w-1/2'>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Task Name'></input>
            </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>
        </div>
         <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Assign to:</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder="Employee Name">
            </input>
         </div>
        <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev, HR, QA'></input>
        </div>
        </div>
        
       <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-44 text-sm py-2 px-4 rounded ouline-none bg-transparent border-[1px] border-gray-400' placeholder="Task Description"></textarea>
       </div>
       
        <button className='bg-emerald-500 hover:bg-emerald-600 px-5 py-3 rounded text-sm mt-4 w-full'>Create Task</button>
    </form>
</div>
  )
}

export default CreateTasks
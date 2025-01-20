import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 
    flex items-center justify-start gap-5 flex-nowrap'>
        <div className='flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl p-5'>
            <div className='flex justify-between tems-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 January 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold px-2'> Complete React Project Video</h2>
            <p className='font-medium text-sm mt-2 px-2'>I have to complete the React Project By tomorrow.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl p-5'>
            <div className='flex justify-between tems-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 January 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold px-2'> Complete React Project Video</h2>
            <p className='font-medium text-sm mt-2 px-2'>I have to complete the React Project By tomorrow.</p>
        </div>
        
        <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl p-5'>
            <div className='flex justify-between tems-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 January 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold px-2'> Complete React Project Video</h2>
            <p className='font-medium text-sm mt-2 px-2'>I have to complete the React Project By tomorrow.</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl p-5'>
            <div className='flex justify-between tems-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>20 January 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold px-2'> Complete React Project Video</h2>
            <p className='font-medium text-sm mt-2 px-2'>I have to complete the React Project By tomorrow.</p>
        </div>
        

    </div>
  )
}

export default TaskList
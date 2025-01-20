import React from 'react'
import Header from '../../Modules/Header'
import CreateTasks from '../../Modules/CreateTasks'
import AllTasks from '../../Modules/AllTasks'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10 '>
        <Header />
        <CreateTasks />
        <AllTasks />
    </div>
  )
}

export default AdminDashboard
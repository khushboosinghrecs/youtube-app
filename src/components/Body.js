import React from 'react'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Body() {
  return (
    <div className='flex'>
       <Sidebar />
        <MainContainer />
    </div>

  )
}

export default Body
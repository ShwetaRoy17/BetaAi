import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Footercom from './components/footer'

const Root = () => {
  return (
    <div className='flex flex-col'>
      <Navbar/>
      <Outlet/>
      <Footercom/>
    </div>
  )
}

export default Root
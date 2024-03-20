import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import footer from './components/footer'

const Root = () => {
  return (
    <>
        <Navbar/>
      <Outlet/>
      <footer/>
    </>
  )
}

export default Root
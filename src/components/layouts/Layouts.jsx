import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <div>
      <Header/>
      <div className="pt-14"></div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layouts

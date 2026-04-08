import React from 'react'
import Navber from '../Herader_Section/Navber'
import { Outlet } from 'react-router'
import Footer from '../Footer_Section/Footer'

export default function MainLayout() {
  return (
    <div className='container mx-auto'>
        <Navber />
        <Outlet />
        <Footer />
    </div>
  )
}

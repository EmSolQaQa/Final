import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router'
import Footer from './Footer'

function MainLayout() {
  return (
    <>
    <Nav></Nav>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default MainLayout

import React from 'react'
import Navbar from '../components/navbar/Navbar'
import {Outlet} from "react-router";

const Layout = () => {
  return (
    <>
            <nav><Navbar/></nav>
            <main><Outlet/></main>
            <footer>Footer</footer>
    </>
  )
}

export default Layout

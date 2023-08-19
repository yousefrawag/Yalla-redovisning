import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar.jsx"
import Fotter from "./component/Fotter/Fotter.jsx"

const Layout = () => {
  return (
    <React.Fragment>
        <Navbar />
        <Outlet />
        <Fotter />
    </React.Fragment>
  )
}

export default Layout

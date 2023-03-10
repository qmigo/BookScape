import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <div className="logo"><Link to='/' className='txt-dec-none col-white'>BookScape</Link></div>
            <div className="navbar-items">
                <button className='nav-btn'>Register</button>
                <button className='nav-btn'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar

import React, { useContext } from 'react'
import './navbar.scss'
import { AuthContext } from '../../context/AuthContext'


const NavBar = () => {
  const {currentUser}= useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className="left">
        <h3>HamGram</h3>
        <i className="bi bi-house-door"></i>
        <i className="bi bi-moon"></i>
        <i className="bi bi-grid"></i>
        <div className="search">
        <i className="bi bi-search"></i>
        <input type="text" placeholder='Search' />
        </div>
        
        
        </div>
      <div className="right">
      <i className="bi bi-person"></i>
      <i className="bi bi-envelope"></i>
      <i className="bi bi-bell"></i>
      <div className="user" >

        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
      
      </div>
        
      </div>
    </div>
  )
}

export default NavBar

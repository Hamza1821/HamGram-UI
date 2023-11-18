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
        <i class="bi bi-grid"></i>
        <div className="search">
        <i class="bi bi-search"></i>
        <input type="text" placeholder='Search' />
        </div>
        
        
        </div>
      <div className="right">
      <i class="bi bi-person"></i>
      <i class="bi bi-envelope"></i>
      <i class="bi bi-bell"></i>
      <div className="user" >

        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
      
      </div>
        
      </div>
    </div>
  )
}

export default NavBar

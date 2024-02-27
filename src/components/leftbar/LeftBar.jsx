import React from 'react'
import './leftbar.scss'

const LeftBar = () => {
  return (
    <div className='LeftBar'>
      <div className="container">
        <div className="menu">
           <div className="user">
        <i class="bi bi-person-circle"></i>
        <span className='username'>Hamza Mubin</span>
           </div>
           <div className="item">
            <img src="/assets/friend.png" alt="hello" />
            <span>Friends</span>
           </div>
           <div className="item">
            <img src="/assets/2.png" alt="hello" />
            <span>Groups</span>
           </div>
           <div className="item">
            <img src="/assets/3.png" alt="hello" />
            <span>Marketplace</span>
           </div>
           <div className="item">
            <img src="/assets/4.png" alt="hello" />
            <span>Watch</span>
           </div>
           <div className="item">
            <img src="/assets/5.png" alt="hello" />
            <span>Memories</span>
           </div>
           
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcut</span>
          <div className="item">
            <img src="/assets/6.png" alt="hello" />
            <span>Events</span>
           </div>
           <div className="item">
            <img src="/assets/7.png" alt="hello" />
            <span>Gaming</span>
           </div>
           <div className="item">
            <img src="/assets/8.png" alt="hello" />
            <span>Gallery</span>
           </div>
           <div className="item">
            <img src="/assets/9.png" alt="hello" />
            <span>videos</span>
           </div>
           <div className="item">
            <img src="/assets/10.png" alt="hello" />
            <span>Messages</span>
           </div>
        </div>
        <hr />
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src="/assets/11.png" alt="hello" />
            <span>Tutorials</span>
           </div>
           <div className="item">
            <img src="/assets/12.png" alt="hello" />
            <span>Courses</span>
           </div>
           <div className="item">
            <img src="/assets/13.png" alt="hello" />
            <span>Fundraiser</span>
           </div>
           
          
        </div>
        <div className="menu">
          <span>Other</span>
          <div className="item">
            <img src="/assets/11.png" alt="hello" />
            <span>Tutorials</span>
           </div>
           <div className="item">
            <img src="/assets/12.png" alt="hello" />
            <span>Courses</span>
           </div>
           <div className="item">
            <img src="/assets/13.png" alt="hello" />
            <span>Fundraiser</span>
           </div>
           
          
        </div>
      </div>
    </div>
  )
}

export default LeftBar

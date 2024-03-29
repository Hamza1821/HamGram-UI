import { useContext,useState } from 'react'
import './navbar.scss'
import { AuthContext } from '../../context/AuthContext'
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios'

const NavBar = () => {
  const {currentUser,logout}= useContext(AuthContext)
  const [menuOpen,setMenuOpen]=useState(false)
  const navigate=useNavigate();

  const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg'
 
const handleClick = async (e) => {
  e.preventDefault();

  try {
   await axios.post("/api/auth/logout", {withCredentials:true});

    
    logout(); 
    navigate('/login')
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", err.response.data);
      // Set error state to display error message to user
    } else if (err.request) {
      // The request was made but no response was received
      console.error("No response received from server:", err.request);
          } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", err.message);
     
    }
  }
};

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
      <div className="user" onClick={()=>setMenuOpen(!menuOpen)} >

        <img src={currentUser.profilePic ? currentUser.profilePic :defaultProfile } alt="" />
        <span>{currentUser.name}</span>
      
      </div>
        {menuOpen?<div className='menuProfile'>
          <Link to={`profile/${currentUser.id}`}  style={{ textDecoration: "none", color: "inherit" }} onClick={()=>setMenuOpen(false)} className='span'> View Profile</Link>
        
        <span className='span' onClick={handleClick}>Logout</span> </div> :null}
      </div>
    </div>
  )
}

export default NavBar

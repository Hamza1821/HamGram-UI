import React from 'react'
import "./login.scss"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const {login}=useContext(AuthContext);

  const handleLogin=()=>{
    login()
  }

  return (
    <div className='login'>
     <div className="card">
      <div className="left">
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem beatae vel ipsum architecto temporibus doloremque. Dolore doloremque praesentium, minima in corrupti perspiciatis inventore aliquid quos!</p>
        <span>Dont't have any account</span>
       <Link to='/register'><button>Register</button></Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button onClick={handleLogin}>login</button>
        </form>
      </div>
     </div>
    </div>
  )
}

export default Login

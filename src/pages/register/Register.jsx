import React from 'react'
import "./register.scss"
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <div className='register'>
    <div className="registercard">
    <div className="registerleft">
       <h1>Register</h1>
       <form>
       <input type="text" placeholder='Name' />
       <input type="email" placeholder='E-mail' />
         <input type="text" placeholder='Username' />
         <input type="password" placeholder='Password' />
         <button>Register</button>
       </form>
     </div>
     <div className="registerright">
       <h1>HamGram</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem beatae vel ipsum architecto temporibus doloremque. Dolore doloremque praesentium, minima in corrupti perspiciatis inventore aliquid quos!</p>
       <span>have an account?</span>
      
      <Link to='/login'><button>Login</button></Link>
     </div>
     
    </div>
   </div>
  )
}

export default Register

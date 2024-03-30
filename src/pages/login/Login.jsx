import React from 'react'
import "./login.scss"
import { Link ,useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'



const Login = () => {
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();
 

  const [inputs,setInputs]=React.useState({
    "username":'',
    "email":'',
    "password":'',
    "name":''
    
  });

  const [err,setErr]=React.useState(false);

const handleChange=(e)=>{
setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}

const handleClick = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("/api/auth/login", inputs,{withCredentials:true});

    const data = response.data;
    setErr(false)
    login(data); 
    navigate('/')
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", err.response.data);
      setErr(err.response.data); // Set error state to display error message to user
    } else if (err.request) {
      // The request was made but no response was received
      console.error("No response received from server:", err.request);
      setErr("No response received from server. Please try again later.");
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up request:", err.message);
      setErr("An error occurred. Please try again later.");
    }
  }
};


  return (
    <div className='login'>
      <h1 className='h'>HamGram</h1>
     <div className="card">
      <div className="left">
        <h1>Hello world</h1>
        <p>Welcome back to our community! Log in now to reconnect with friends, share updates, and explore new features. Your social experience awaits!</p>
        <span> Do not have any account ?</span>
       <Link to='/register'><button>Register</button></Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form>
<<<<<<< HEAD
          <input type="text" placeholder='Username' onChange={handleChange}  name='username'/>
          <input type="password" placeholder='Password' onChange={handleChange} name='password' />
          {err? err:''}
          <button onClick={handleClick}>login</button>
=======
          <input type="text" placeholder='Username' />
          <input type="password" placeholder='Password' />
          <button onClick={handleLogin()}>login</button>
>>>>>>> 41f6e40243284f2bad0786c8ee0c3a7d3ff790b4
        </form>
      </div>
     </div>
    </div>
  )
}

export default Login

import {  useState } from 'react'
import "./register.scss"
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const navigate=useNavigate()
const [inputs,setInputs]=useState({
  "username":'',
  "email":'',
  "password":'',
  "name":''
  
});
const [err,setErr]=useState(false);

const handleChange=(e)=>{
setInputs(prev=>({...prev, [e.target.name]:e.target.value}))
}
const handleClick=async(e)=>{
e.preventDefault()
setButtonDisabled(true)

        try {
          console.log(inputs)
          await axios.post("/api/auth/register",inputs,{withCredentials:true})
          navigate('/login')
          
         
        } catch (err) {
          setButtonDisabled(false)
          setErr(err.response.data);
        }

}



  return (
    <div className='register'>
       <h1 className='h'>HamGram</h1>
    <div className="registercard">
    <div className="registerleft">
       <h1>Register</h1>
       <form>
       <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
       <input type="email" placeholder='E-mail' name='email' onChange={handleChange}/>
         <input type="text" placeholder='Username'name='username'  onChange={handleChange}/>
         <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
         {err? err: ""}
         <button onClick={handleClick} disabled={isButtonDisabled} >Register</button>
       </form>
     </div>
     <div className="registerright">
       <h1>HamGram</h1>
       <p>Connect with friends, Share updates, Explore features. Join our community today!</p>
       <span>have an account?</span>
      
      <Link to='/login'><button>Login</button></Link>
     </div>
     
    </div>
   </div>
  )
}

export default Register

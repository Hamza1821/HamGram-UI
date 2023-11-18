import React, { useContext } from 'react'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Routes,Route, Outlet , Navigate} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import LeftBar from './components/leftbar/LeftBar'
import RightBar from './components/rightbar/RightBar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import './style.scss'
import { AuthContext } from './context/AuthContext'
const App = () => {
  const isAuthenticated =true;
  const {currentUser}=useContext(AuthContext)
  function Layout() {
    return (
      <div className='theme-light'> 
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
        </div>
  
      </div>
    );
  }
  
  return (
    <>
    
   <Routes>
   <Route path="/" element={isAuthenticated?( <Layout />) : (<Navigate to='/login' />)}>
        {/* Define child routes here */}
        <Route index element={<Home/>} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
   </Routes>
      
    </>
  )
}

export default App

import React from 'react'
import "./profile.scss"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className='profile'>
      <div className="images">
        <img src="https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="cover" />
        <img src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="profilePic" />

      </div>
      <div className="profileContainer">

        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/"><FacebookRoundedIcon /></a>
            <a href="https://www.facebook.com/"><InstagramIcon /></a>
            <a href="https://www.facebook.com/"><TwitterIcon /></a>
            <a href="https://www.facebook.com/"><PinterestIcon /></a>
          </div>
          <div className="center">
            <span>Jane Doe</span>
            <div className="info">
              <div className="infoItem">
                <LocationOnIcon fontSize='small'/>
                <span>USA</span>
              </div> 
              <div className="infoItem">
                <LanguageIcon  fontSize='small'/>
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
          </div>
          <div className="right">
            <EmailIcon/>
            <MoreVertIcon/>

          </div>
        </div>
      </div>
      <Posts/>
      
    </div>
  )
}

export default Profile

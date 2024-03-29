/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Profile.jsx
import {useLocation} from 'react-router-dom'
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Posts from "../../components/posts/Posts"
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useContext,useState,useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Update from '../../components/update/Update.jsx'
import { debounce } from 'lodash';


const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  useEffect(() => {
    // Scroll to the top of the page when userId changes
    window.scrollTo(0, 0);
   
     
  }, [userId,openUpdate]);
  
  const handleFollow = () => {
    
    mutation.mutate(relationshipData.includes(currentUser.id));
  };
  const debouncedFollow = debounce(handleFollow, 1000); 
 

const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg'
  const defaultCover = 'https://images.unsplash.com/photo-1617713964959-d9a36bbc7b52?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  

  const { isLoading, error, data=[] } = useQuery({
    queryKey: ["user",userId], 
    queryFn: ()=> makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
});

  const { isLoading: rIsLoading, data: relationshipData=[] } = useQuery({
    queryKey :["relationship"],
    queryFn :() =>
      makeRequest.get("/relationships?followedId=" + userId).then((res) => {
        return res.data;
      })
    });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
        
      
    }
   } );



  return (
    <div className='profile'>
      <div className="images">
        <img src={data.coverPic? data.coverPic :defaultCover} alt="" className="cover" />
        <img src={data.profilePic? data.profilePic:defaultProfile} alt="" className="profilePic" />

      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} /> }
      <div className="profileContainer">

        <div className="userInfo">
          <div className="left">
            <a href="https://www.facebook.com/"><FacebookRoundedIcon /></a>
            <a href="https://www.facebook.com/"><InstagramIcon /></a>
            <a href="https://www.facebook.com/"><TwitterIcon /></a>
            <a href="https://www.facebook.com/"><PinterestIcon /></a>
          </div>
          <div className="center">
            <span className='name'>{data.name}</span>
            <div className="info">
              <div className="infoItem">
                <LocationOnIcon fontSize='small'/>
                <span className='cw'>{data.city}</span>
              </div> 
              <div className="infoItem">
                <LanguageIcon  fontSize='small'/>
                <span className='cw'>{data.website}</span>
              </div>
            </div>
            {userId==currentUser.id ? <button onClick={()=> setOpenUpdate(true)}>update</button>:<button onClick={debouncedFollow}>{relationshipData.includes(currentUser.id)? <span className='follow'>unfollow</span>:<span className='follow'>follow</span>}</button>}
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

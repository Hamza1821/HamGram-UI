
import './share.scss'
import  { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {useMutation, useQueryClient} from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import Image from '/assets/img.png'
import Map from '/assets/map.png'
import Friend from '/assets/friend.png'







const Share = () => {
  const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg' 

    const [file,setFile]= useState(null)
    
    const [desc,setDesc]= useState("");

    const {currentUser}= useContext(AuthContext)

    const upload=async()=>{
      try {
        const formData=new FormData();
        formData.append("file",file)
        const res =await makeRequest.post('/upload',formData, {withCredentials:true});
        return res.data; 
        
      } catch (error) {
        console.log(error)
      }
    }
    



    const queryClient =useQueryClient("")
    const mutation = useMutation( {
      mutationFn:async (newPost) => {
        
        const response = await makeRequest.post('/posts',newPost); // Send POST request with FormData
        return response.data; // Return response data (assuming successful response)
      },
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']); // Invalidate 'posts' cache
      },
      onError: (error) => {
        console.error('Error creating post:', error); // Handle errors here
      },
    });
  
    const handleClick = async (e) => {
      e.preventDefault();
  
      if (!desc && !file) { // Basic validation (optional)
        console.error('Please enter a description for your post.');
        return;
      }
   
      try {
        let prefix="/upload/";
        let imgUrl="";
        if(file) imgUrl= prefix +  await upload();


        await mutation.mutate({ desc,img:imgUrl});
        setFile(null) 
        setDesc("")
        document.getElementById('shareInput').value="";
        document.getElementById('file').value=null

      } catch (error) {
        console.error('Error creating post:', error); // Handle errors in catch block
      }
    };
    const handleChange =(e)=> {setDesc(e.target.value)
     console.log(desc)
    }

  return (
    <div className='share'>
     <div className="container">
     <div className="stop">
         <img src={currentUser.profilePic ? currentUser.profilePic :defaultProfile} alt="" />
         <input type="text" placeholder={`whats's on your mind ${currentUser.name}`} id='shareInput' onChange={handleChange} />
         {file?<img className='selectedImage' src={URL.createObjectURL(file)} ></img>:""}
      
      </div>
      <div className="sbtm">
        <div className="left">
          <input type="file" id="file" style={{display:"none"}}  onChange={e=>setFile(e.target.files[0])} />
          <label htmlFor="file" >
            <div className="sitem">
              <img src={Image} alt="" />
              <span>Add Image</span>
            </div>
          </label>
          <div className="sitem">
            <img src={Map} alt="" />
            <span>Add a Place</span>
          </div>
          <div className="sitem">
            <img src={Friend} alt="" />
            <span>Tag Friends</span>
          </div>
        </div>
        <div className="right">
        <button onClick={handleClick}>share</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Share

import  { useContext } from 'react'
import './stories.scss'
import { AuthContext } from '../../context/AuthContext'

const Stories = () => {
   const {currentUser}= useContext(AuthContext)
  
   const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg' 
    const stories =[
       {
        id:1,
        name:'john doe',
        img:'https://images.unsplash.com/photo-1615833843615-884a03a10642?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       },
       {
        id:2,
        name:'john doe',
        img:'https://images.unsplash.com/photo-1614747232270-c59cdf8fd38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlcnRpY2FsJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
       },
       {
        id:3,
        name:'john doe',
        img:'https://images.unsplash.com/photo-1614747232270-c59cdf8fd38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlcnRpY2FsJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
       },
       {
        id:4,
        name:'john doe',
        img:'https://images.unsplash.com/photo-1614747232270-c59cdf8fd38f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHZlcnRpY2FsJTIwc3Rvcmllc3xlbnwwfHwwfHx8MA%3D%3D'
       }


    ]
  

  return (
    <div className='stories'>
     
      <div className="story">
        <img src={currentUser.profilePic ? currentUser.profilePic :defaultProfile} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story,key)=>{
        
        return (
            <div className="story" key={key}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
        </div>
        )
      })}
    </div>
  )
}

export default Stories

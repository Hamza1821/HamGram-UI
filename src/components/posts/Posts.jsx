import React from 'react'
import './posts.scss'

import Post from '../post/Post'



const Posts = () => {
  const posts=[
    {
      id:1,
      name:"Hamza Mubin",
      userId:1,
      profilePic: "https://lh5.googleusercontent.com/proxy/sRpwVHo_B-8sxR1Wym0dib-VCjxHlH056u_tgmV-OhY87WjJvxMQXnW7haf8z-3iDYNOhqkQDGEw7iRg3v2KOUHuHnAi4zR-GRM78c0BXG2Cyv7ImNgcyQZbwSF9WzzalF52uVVlcw",
      desc: " full  stack web developer || Student at IET Lucknow",
      img: "https://wallpapers.com/images/high/obito-uchiha-six-paths-doiun9ayak5htw1e.webp"
    },
    {
      id:2,
      name:"jane doe",
      userId:2,
      profilePic:"https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus deserunt at."
  
  }
   ,]

  return <div className="posts">
     {posts.map(post=>(
      <Post post={post} key={post.id}/>
     ))}
  </div>
}

export default Posts

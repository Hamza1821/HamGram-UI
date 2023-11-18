import React from 'react'
import './home.scss'
import Stories from '../../components/stories/Stories.jsx'
import Posts from '../../components/posts/Posts.jsx'

const Home = () => {
  return (
    <div className='home'>
     <Stories/>
     <Posts/>
     
    </div>
  )
}

export default Home

// import React from 'react'
import './posts.scss'
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import Post from '../post/Post'




const Posts = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => makeRequest.get('/posts',{withCredentials:true}).then(res => res.data),
  });



  return <div className="posts">
     {error? "something went wrong" :(isLoading? "Loading": data.map(post=>(
      <Post post={post} key={post.id}/>
     )))}
  </div>
}

export default Posts

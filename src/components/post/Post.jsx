import  "./post.scss"

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from "react-router-dom";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post=({post})=>{
  const [liked,setLiked]=useState(false);
  const handleLike=(e)=>{
   setLiked(!liked)
}
const [commentOpen,setCommentOpen]=useState(false);
const hadleComment=()=>{
setCommentOpen(!commentOpen);
}

    return (
        <div className="post">
          <div className="user">
            <div className="userInfo">
             <img src={post.profilePic} alt="" />
             <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration:"none",color:"inherit"}} ><span>{post.name}</span></Link>
               <h5>1 min ago</h5>
             </div>
            </div>
            <MoreHorizOutlinedIcon/>

          </div>
          <div className="content">
            <p>{post.desc}</p>
            <img src={post.img} alt="" />
          </div>
          <div className="itr">
            <div className="itrIcons" >
              {liked? <FavoriteIcon onClick={handleLike}/> : <FavoriteBorderOutlinedIcon onClick={handleLike}/> }
              12 likes
            </div>
            <div className="itrIcons" >
             <TextsmsOutlinedIcon onClick={hadleComment}/>
              12 comments
            </div>
            <div className="itrIcons" >
              <ShareOutlinedIcon/>
              12 share
            </div>
          </div>
         {commentOpen? <Comments/>:null}
        </div>
    )
}

export default Post;
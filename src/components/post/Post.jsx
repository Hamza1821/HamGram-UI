/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Update.jsx
import "./post.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import moment from "moment";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import {
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  Favorite as FavoriteIcon,
  TextsmsOutlined as TextsmsOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
  MoreHorizOutlined as MoreHorizOutlinedIcon,
} from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Post = ({ post }) => {
  // const [liked, setLiked] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg' 

  const handleComment = () => {
    setCommentOpen(!commentOpen);
  };

  const queryClient = useQueryClient();
  const { data:comments=[] } = useQuery({
    queryKey: ['posts',post.id],
    queryFn: () => makeRequest.get('/comments?postId='+post.id).then(res => res.data),
  });
 
  const mutation = useMutation({
    mutationFn: async (liked) => {
      if (liked) {
        await makeRequest.delete("likes?postId=" + post.id, { withCredentials: true });
      } else {
        await makeRequest.post("likes", { postId: post.id });
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["likes", post.id]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const mutationDelete = useMutation({
    mutationFn: async () => {
   
        await makeRequest.delete("/posts/"+post.id, { withCredentials: true });
      
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries(["posts"]);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  


  let {
    isLoading,
    error,
    data=[],
  } = useQuery({
    queryKey: ["likes",post.id],
    queryFn: async() =>
      await makeRequest
        .get("/likes?postId=" + post.id ,{withCredentials:true})
        .then((res) => res.data)
        .catch((error) => {
          console.error("Error fetching likes:", error);
          return [];
        }),
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleLike = () => {
   
    mutation.mutate(data.includes(currentUser.id));

    
  };
  const handleDelete=()=>{
           
    mutationDelete.mutate();
  }

  return (
    <div className="post">
      <div className="user">
        <div className="userInfo">
          <img src={post.profilePic? post.profilePic:defaultProfile} alt="" />
          <div className="details">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <span>{post.name}</span>
            </Link>
            <h5>{moment(post.createdAt).fromNow()}</h5>
          </div>
        </div>
         <div className="menus">
       {post.userId==currentUser.id ? <MoreHorizOutlinedIcon className="menu" onClick={()=>setMenuOpen(!menuOpen)} />:null}
        {menuOpen?<button className="deleteBtn" onClick={handleDelete} >Delete</button>: null}
         </div>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
      </div>
      <div className="itr">
        <div className="itrIcons">
          {isLoading?"loading": data.includes(currentUser.id) ? (
            <FavoriteIcon onClick={handleLike} style={{ color: "red" }} />
          ) : (
            <FavoriteBorderOutlinedIcon onClick={handleLike} />
          )}
          <span>{data.length}</span>
        </div>
        <div className="itrIcons">
          <TextsmsOutlinedIcon onClick={handleComment} />
          {comments.length}
        </div>
        <div className="itrIcons">
          <ShareOutlinedIcon />
          12 share
        </div>
       
        
        
      </div>
      {commentOpen ? <Comments postId={post.id} /> : null}
    </div>
  );
};

export default Post;
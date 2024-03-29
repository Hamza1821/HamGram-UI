import { useState, useContext } from "react";
import "./comments.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {useQuery} from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import moment from'moment'
import {useMutation, useQueryClient} from '@tanstack/react-query'




const Comments = ({postId}) => {
  const { currentUser } = useContext(AuthContext);
  
  const [newComment, setNewComment] = useState("");

   const { isLoading, error, data } = useQuery({
    queryKey: ['comments'],
    queryFn: () => makeRequest.get('/comments?postId='+postId).then(res => res.data),
  });


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };
  const queryClient =useQueryClient("")

  const mutation = useMutation( {
    mutationFn:async (comment) => {
      
      const response = await makeRequest.post('/comments?postId='+postId,comment); // Send POST request with FormData
      return response.data; // Return response data (assuming successful response)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']); // Invalidate 'posts' cache
    },
    onError: (error) => {
      console.error('Error creating post:', error); // Handle errors here
    },
  });

  const addComment = async(e) => {
    if(newComment==""){
      console.log("write something")
      return
    }
    e.preventDefault();

    try {
      


      await mutation.mutate({ newComment,postId});
      setNewComment("");
     

    } catch (error) {
      console.error('Error creating comment:', error); // Handle errors in catch block
    }
   
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input
          type="text"
          id="comment"
          placeholder="Write a Comment"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={addComment}>add</button>
      </div>
      {error? "something went wrong" :(isLoading? "loading" :data.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="userC">
            <div className="userCInfo">
              <img src={comment.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${comment.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>{comment.name}</span>
                </Link>
                <h5>{moment(comment.createdAt).fromNow()}</h5>
              </div>
            </div>

            <span>{comment.desc}</span>
          </div>
        </div>
      )))}
    </div>
  );
};
export default Comments;

import React, { useState, useContext } from "react";
import "./comments.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Hamza Mubin",
      userCId: 1,
      profilePic:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg",
      desc: "lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus deserunt at.",
      img:
        "https://wallpapers.com/images/high/obito-uchiha-six-paths-doiun9ayak5htw1e.webp"
    },
    {
      id: 2,
      name: "jane doe",
      userCId: 2,
      profilePic:
        "https://wallpapers.com/images/hd/cool-profile-picture-87h46gcobjl5e4xu.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minus deserunt at."
    }
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (!newComment.trim()) {
      // If the comment is empty or only contains whitespace, return
      return;
    }

    let random = Math.floor(Math.random() * 100);
    const commentNew = {
      id: random,
      name: `${currentUser.name}`,
      userCId: random,
      profilePic: `${currentUser.img}`,
      desc: newComment
    };
    setComments([commentNew, ...comments]);
    setNewComment(""); // Clear the input field after adding the comment
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.img} alt="" />
        <input
          type="text"
          id="comment"
          placeholder="Write a Comment"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button onClick={addComment}>add</button>
      </div>
      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <div className="userC">
            <div className="userCInfo">
              <img src={comment.profilePic} alt="" />
              <div className="details">
                <Link
                  to={`/profile/${comment.userCId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span>{comment.name}</span>
                </Link>
                <h5>1 min ago</h5>
              </div>
            </div>

            <span>{comment.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Comments;

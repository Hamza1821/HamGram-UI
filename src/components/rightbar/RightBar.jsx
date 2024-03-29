/* eslint-disable no-unused-vars */
import React from 'react';
import './rightbar.scss';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Link } from "react-router-dom";

const RightBar = () => {
  const defaultProfile = 'https://i.pinimg.com/236x/90/de/25/90de257fdac14d35d66a81ab8e282cad.jpg'; 

  let {
    isLoading,
    error,
    data=[],
  } = useQuery({
    queryKey: ["suggestions"],
    queryFn: async () =>
      await makeRequest
        .get("/users" ,{withCredentials:true})
        .then((res) => res.data)
        .catch((error) => {
          console.error("Error fetching likes:", error);
          return [];
        }),
  });

  const uniqueUsers = data.filter((user, index, self) => 
  index === self.findIndex((u) => (
    u.username === user.username
  ))
);

  return (
    <div className='rightbar'>
      <div className="container">
        <div className="item">
          <span>Suggestion for you</span>
          {uniqueUsers.map((user) => (
            // eslint-disable-next-line react/jsx-key
            <div className="user" key={user.username}>
                <Link   to={`/profile/${user.id}`}
             style={{ textDecoration: "none", color: "inherit" }} >
               <div className="userInfo">
                <img src={user.profilePic ? user.profilePic : defaultProfile} alt="" />
                <span>{user.name}</span>
              </div>
             </Link>
            
            </div>
          ))}
        </div>

        <div className="item">
          <span>last Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <h5>Eren Yeager </h5>
              <p>
                Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <h5>Maxne Caulfield </h5>
              <p>
                Changed their profile picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h5>mike thompson </h5>
              <p>
                Changed their cover picture
              </p>
            </div>
            <span>16 min ago</span>
          </div>
        </div>

        <div className="item">
          <span>Online Friends</span>

          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="online"></div>
              <h5>Maxne Caulfield </h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1521252659862-eec69941b071?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <div className="online"></div>
              <h5>Zoe </h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <div className="online"></div>
              <h5>mike thompson </h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.siasat.com/wp-content/uploads/2023/03/Andrew-Tate-660x495.jpg" alt="" />
              <div className="online"></div>
              <h5>Andrew tate</h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.siasat.com/wp-content/uploads/2023/03/Andrew-Tate-660x495.jpg" alt="" />
              <div className="online"></div>
              <h5>Andrew tate</h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.siasat.com/wp-content/uploads/2023/03/Andrew-Tate-660x495.jpg" alt="" />
              <div className="online"></div>
              <h5>Andrew tate</h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.siasat.com/wp-content/uploads/2023/03/Andrew-Tate-660x495.jpg" alt="" />
              <div className="online"></div>
              <h5>Andrew tate</h5>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn.siasat.com/wp-content/uploads/2023/03/Andrew-Tate-660x495.jpg" alt="" />
              <div className="online"></div>
              <h5>Andrew tate</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;

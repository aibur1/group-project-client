import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import detailsImage from "../../../images/Blog-details.jpg";
import useAuth from "../../Hooks/useAuth";
import Header from "../../Shared/Header/Header";
const axios = require('axios');

const BlogDetails = () => {
  const { user } = useAuth();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isAddComment, setIsAddComment] = useState(false);
  const {postId} = useParams();
  
  
  const findComments = comments.filter(comment => comment.postId === post._id);
  console.log(findComments);
  
  // get a single blog 
  useEffect(() =>{
    fetch(`http://localhost:5000/blogDetails/${postId}`)
    .then(res => res.json())
    .then(data => setPost(data))
  }, [postId]);

  // get all comments 
  useEffect(() =>{
    fetch(`http://localhost:5000/comments`)
    .then(res => res.json())
    .then(data => setComments(data))
  }, [postId,isAddComment]);

  // add new comment
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    submitData.postId = post?._id;
    submitData.commData = currDate;
    submitData.commTime = currTime;
    submitData.posterName = user?.displayName;
    submitData.posterEmail = user?.email;
    submitData.posterPhoto = user?.photoURL ? user.photoURL : 'https://i.ibb.co/jwLpZMr/user-profile.png';
    
    setIsAddComment(false);
    axios.post('http://localhost:5000/comments', submitData )
    .then(function (response) {
      if(response.data.insertedId){
        setIsAddComment(true);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="">
      <Header />
      <div className="container py-4">
        <h1 className="fw-bolder text-start">
          The effect of livestock on the physiological condition of roe deer is
          modulated by habitat quality
        </h1>
        <div className="d-flex justify-content-between align-items-center p-3 bg-light">
          <div className="text-start d-flex align-items-center">
            <div>
              {user.photoURL ? (
                <img
                  width="48px"
                  className="img-fluid rounded-circle"
                  src={user?.photoURL}
                  alt="user"
                />
              ) : (
                <img
                  width="48px"
                  className="img-fluid rounded-circle"
                  src={`https://i.ibb.co/jwLpZMr/user-profile.png`}
                  alt="user"
                />
              )}
            </div>
            <div className="ms-2">
              <p className="mb-0">
                By <span className="fw-bold">{user.displayName}</span>
              </p>
              <p className="mb-0 text-primary">
                <small>04/01/2022</small>
              </p>
            </div>
          </div>
          <div>
            <p className="mb-0">
              <button className="border-0 bg-light">
                <i className="fas fa-thumbs-up fs-2 text-success"></i>
              </button>
              <span className="fs-3 fw-bold ms-2">68</span>
            </p>
          </div>
        </div>
        <div className="bg-light p-2">
          <img src={detailsImage} className="img-fluid" alt="" />
          <div className="p-2">
            {/* commnet box  */}
            <div className="w-100">
            <h5 className="text-start border-bottom border-3 mb-4">Comments....</h5>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="d-flex justify-content-between align-items-center p-1"
              >
                <div className="text-start me-2">
                  <div>
                    {user.photoURL ? (
                      <img
                        width="48px"
                        className=" rounded-circle"
                        src={user?.photoURL}
                        alt="user"
                      />
                    ) : (
                      <img
                        width="48px"
                        className=" rounded-circle"
                        src={`https://i.ibb.co/jwLpZMr/user-profile.png`}
                        alt="user"
                      />
                    )}
                  </div>
                </div>
                <textarea placeholder="Comments..." className="w-100 p-1 mb-0 me-1" {...register("comment", {})} />
              <button className="border-0 p-2 comment-btn" type="submit"><span><i className="fas fa-location-arrow fs-3"></i></span></button>
              </form>
            </div>

            {/* show comments  */}
            <div className="row g-2 mt-4">
            {
              findComments?.map(comment => (
                <div 
                key={comment._id}
                className="col-sm-12 w-100 d-flex justify-content-between align-items-center px-3 py-2 bg-white">
                <div className="text-start me-2">
                  <div>
                    {user.photoURL ? (
                      <img
                        width="30px"
                        className=" rounded-circle"
                        src={comment?.posterPhoto}
                        alt="user"
                      />
                    ) : (
                      <img
                        width="30px"
                        className=" rounded-circle"
                        src={`https://i.ibb.co/jwLpZMr/user-profile.png`}
                        alt="user"
                      />
                    )}
                  </div>
                </div>
                <div className="text-start w-100 px-3 border-start border-end border-2 me-2">
                  <p className="me-1">{comment?.comment}</p>
                  <span className="fw-bold me-3 text-uppercase fs-6">{comment?.posterName}</span>
                  <span>{comment?.commData}</span>
                </div>
                <div className="">
                <p className="px-2 py-1 rounded-2 bg-light mb-0 fw-bold">Replay</p>
                </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
            </div>
  );
};

export default BlogDetails;

import React from "react";
import { useForm } from "react-hook-form";
import detailsImage from "../../../images/Blog-details.jpg";
import useAuth from "../../Hooks/useAuth";
const axios = require('axios');

const BlogDetails = () => {
  const { user } = useAuth();

  // add new comment
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (submitData) => {
    submitData.posterName = user?.displayName;
    submitData.posterEmail = user?.email;
    submitData.posterPhoto = user?.photoURL ? user.photoURL : 'https://i.ibb.co/jwLpZMr/user-profile.png';
    
    axios.post('http://localhost:5000/comments', {
      submitData
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="py-4">
      <div className="container">
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
        <div className="bg-light p-3">
          <img src={detailsImage} className="img-fluid" alt="" />
          <div className="d-flex justify-content-between align-items-center p-3">
            {/* commnet box  */}
            <div className="w-100">
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
                <button className="border-0 bg-warning p-2 rounded-2" type="submit"><span><i className="fas fa-location-arrow fs-3"></i></span></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

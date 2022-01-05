import React from "react";
import detailsImage from "../../../images/Blog-details.jpg";
import useAuth from "../../Hooks/useAuth";

const BlogDetails = () => {
  const { user } = useAuth();
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
              <img
                src={user.photoURL}
                style={{ width: "48px" }}
                className="img-fluid rounded-circle"
                alt=""
              />
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
            <div>
                <form action=""  className="d-flex justify-content-between align-items-center p-3">
                <div className="text-start">
              <div>
                <img
                  src={user.photoURL}
                  style={{ width: "48px" }}
                  className="img-fluid rounded-circle"
                  alt=""
                />
              </div>
            </div>
            <textarea className="w-100" name="" id="" cols="" rows=""></textarea>
            <button type="submit">Comment</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

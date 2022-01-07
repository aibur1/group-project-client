import React, { useEffect, useState } from "react";

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    fetch("https://calm-eyrie-50135.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [updated]);
  return (
    <>
      <h1 className="text-title text-center mb-5">All Post Details</h1>
      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-lg-3 col-md-4 col-12 mb-5">
            <div className="card card-details shadow-lg ">
              <div className="text-center">
                <img style={{width:'300px',height:'200px'}}
                  src={`data:image/png;base64,${post.image}`}
                  className="card-img-top card-img p-3 w-50 "
                  alt="..."
                />
                <hr />
              </div>
              <div className="card-body ">
                <h3 className="card-title text-left">
                  Title: {post.title}
                </h3>
                <hr />
                <p className="text-left">
                  Description: {post.description}
                </p>
                <hr />
                <p className="text-left">
                  Blog Type: {post.category}
                </p>
                <hr />
                <p className="text-left">
                  Blogger Name: {post.name}
                </p>
                <hr />
                <p className="text-left">
                  Date: {post.date} Time: {post.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManagePosts;
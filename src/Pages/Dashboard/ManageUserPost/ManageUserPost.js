import DeleteForever from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
// import "./ManageUserPost.css";

const ManageUserPost = () => {
  const [products, setProducts] = useState([]);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {
    fetch("https://calm-eyrie-50135.herokuapp.com/blog")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [updated]);

  const handleDelete = (id) => {
    const confirmation = window.confirm("Do you want to delete?");
    if (confirmation) {
      const url = `https://calm-eyrie-50135.herokuapp.com/blog/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = products.filter((product) => product?._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div>
      <div id="services" className="container-fluid">
        <h1 className="text-center mb-5 text-title">Manage User Post</h1>
        <div className="row g-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="col-lg-3 col-md-4 col-12 details-box"
            >
              <Card className="text-center ">
                <Card.Header className="card-head">{product._id}</Card.Header>
                <Card.Body className="c-body">
                  <Card.Title>Blog Title: {product.title}</Card.Title>
                  <Card.Text>Blog Category: {product.category}</Card.Text>
                  <Card.Text>
                    Written By {product.name} | {product.date},{product.time}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="card-footer">
                  <button
                    className=" btn-sub mt-2 px-3 py-1 ms-2 text-center"
                    onClick={() => handleDelete(product._id)}
                  >
                    {" "}
                    <DeleteForever></DeleteForever>
                    Delete
                  </button>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageUserPost;
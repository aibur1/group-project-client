import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const AddBlog = () => {
  const {user} = useAuth();
  const { register, reset } = useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("category", category);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    formData.append("date", currDate);
    formData.append("time", currTime);
    

    fetch("https://calm-eyrie-50135.herokuapp.com/blog", {
    // fetch("http://localhost:5000/blog", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          alert("added successfully");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Container className="text center add-blog pt-5">
        <h1>Add blog</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={user?.displayName ? user?.displayName : ''}
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={user?.email ? user?.email : ''}
            {...register("email", { required: true })}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <select className="drop" {...register("category", { required: true })}
          onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Category-1" >Category-1</option>
            <option value="Category-2" >Category-2</option>
            <option value="Category-3" >Category-3</option>
            <option value="Category-4" >Category-4</option>
            
          </select>
          <input
            accept="image/*"
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            {...register("title", { required: true })}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            {...register("description")}
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            className="btn-buy fs-3 border-0 rounded-1 fw-bold"
            type="submit"
          />
        </form>
      </Container>
    </div>
  );
};

export default AddBlog;

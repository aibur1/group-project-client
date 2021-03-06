import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import food from '../../../images/food.jpg';




const OurPost = [
    {
        id: 1,
        img: food,
        name: 'Travel.fashion',
        description: 'Fashion is a form of self-expression and autonomy  '
    },
    {
        id: 2,
        img: food,
        name: 'Travel.food',
        description: 'food, substance consisting essentially of protein '
    },
    {
        id: 3,
        img: food,
        name: 'Travel.lifestyle',
        description: 'Lifestyle is a way of life established by a society'
    },

];

const Post = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() =>{
        fetch('https://calm-eyrie-50135.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setPosts(data))

    }, []);
    return (
        <div >
            <h1>featured post</h1>
            <div className='container'>
            <Row xs={1} md={2} lg={3} className='g-4'>
                {OurPost.map(post => <Col
                    key={post.id}>
                    <Card  className='card'>
                        <Card.Img variant="top" className='img' src={post.img}  />
                        <h5 className='title' style={{textAlign:"left",marginLeft:"10px", color:"darkred",marginTop:"20px"}}>{post.name}</h5>
                        <p style={{textAlign:"left",marginLeft:"10px"}}>
                            {post.description?.slice(0,45)}
                        </p>
                        <div className='d-flex justify-content-between p-2 bg-light'>
                            <small className='card-foot'>
                                17 july
                            </small>
                            <small className='card-foot'>
                                .8 MINS READ
                            </small>
                            <small className='card-foot' >
                               .12K VIEWS
                            </small>
                        </div>
                    </Card>
                </Col>)
                }

            </Row>
            </div>
        </div>
    );
};

export default Post;
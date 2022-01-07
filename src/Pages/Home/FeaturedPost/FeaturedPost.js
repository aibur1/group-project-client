import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';


const FeaturedPost = () => {
    const [posts, setPosts] = useState([]);
    console.log(posts);
    useEffect(() =>{
        fetch('https://calm-eyrie-50135.herokuapp.com/blog')
        .then(res => res.json())
        .then(data => setPosts(data))

    }, []);
    return (
        <div>
            
            <Carousel fade >
                <Carousel.Item>
                    <img style={{height:"600px"}}
                        className="d-block w-100"
                        src="https://i.ibb.co/Gt8fsxH/stefan-stefancik-0w-Mmx-NB6-Xzc-unsplash.jpg"
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"600px"}}
                        className="d-block w-100"
                        src="https://i.ibb.co/tBgHfsC/luca-bravo-O453-M2-Liufs-unsplash.jpg"
                        alt="Second slide"
                    />

             
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:"600px"}}
                        className="d-block w-100"
                        src="https://i.ibb.co/HT1Pkry/mesut-kaya-e-Ocyhe5-9s-Q-unsplash.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                       
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FeaturedPost;
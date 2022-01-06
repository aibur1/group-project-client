import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <Header />
            <FeaturedPost />
            <Post />

            {/* footer section  */}
            <Footer />
        </div>
    );
};

export default Home;
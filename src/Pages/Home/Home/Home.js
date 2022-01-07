import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import FeaturedPost from '../FeaturedPost/FeaturedPost';
import Post from '../Post/Post';
import RecentPost from '../RecentPost/RecentPost';

const Home = () => {
    return (
        <div>
            <Header />
            <FeaturedPost />

            {/* recent post  */}
            <RecentPost />
            
            {/* display post  */}
            <Post />

            {/* footer section  */}
            <Footer />
        </div>
    );
};

export default Home;
import React from 'react';
import detailsImage from '../../../images/Blog-details.jpg';
import useAuth from '../../Hooks/useAuth';

const BlogDetails = () => {
    const {user} = useAuth();
    return (
        <div className='py-4'>
            <div className="container">
            <h1 className='fw-bolder text-start'>The effect of livestock on the physiological condition of roe deer is modulated by habitat quality</h1>
            <div>
                <p>{user.displayName}</p>
            </div>
            <div>
                <img src={detailsImage} className='img-fluid' alt="" />
            </div>
            </div>
        </div>
    );
};

export default BlogDetails;
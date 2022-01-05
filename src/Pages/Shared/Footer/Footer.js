import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container text-white mt-5'>
            <div className="container">
            <div className='row g-5 text-start mx-auto py-4'>
                <div className='col-sm-4'>
                    <h3 className='text-warning'>About</h3>
                    <h1>YYYY YYYY</h1>
                    <p className='footer-about'>Whoever replaces Speaker Nancy Pelosi will face the daunting task of presiding over the increasingly tense debate about whether Democrats will be the party of the activist.</p>
                    <div className=''>
                        <div className='icon'>
                            <Link to="#"><i className="fab fa-facebook"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-instagram-square "></i></Link>
                            <Link to="#"><i className="fas fa-rss "></i></Link>
                        </div>
                    </div>

                </div>
                <div className='col-sm-2'>
                    <h3 className='text-warning'>Information</h3>
                    <div className='info '>
                        <h5><Link to="#">About Us</Link></h5>
                        <h5><Link to="#">More Search</Link></h5>
                        <h5><Link to="#">Blogs</Link></h5>
                        <h5><Link to="#">Testimonial</Link></h5>
                        <h5><Link to="#">Events</Link></h5>

                    </div>
                </div>
                <div className='col-sm-3'>
                    <h3 className='text-warning'>Helpful Links</h3>
                    <div className='info'>
                    <h5><Link to="#">Services</Link></h5>
                    <h5><Link to="#">Stories</Link></h5>
                    <h5><Link to="#">Tearms & Condition</Link></h5>
                    <h5><Link to="#">Privacy Policy</Link></h5>
                    </div>

                </div>
                <div className='col-sm-3 pt-2'>
                    <h3 className='pb-3'>Subscribe</h3>
                    <input className='input' placeholder='Enter Your Email'></input> <br /> <br />
                    <button className='bg-warning text-dark subscribe'>Subscribe</button>
                </div>
            </div>
            </div>
            <p className='py-2 bg-dark text-center'>&copy; 2021 YYY YYY All Right Reserved.</p>
        </div>
    );
};

export default Footer;
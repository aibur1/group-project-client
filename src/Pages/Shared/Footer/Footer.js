import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-white blog_footer'>
            <div className='row mx-auto container py-3 about '>
                <div className='col-md-3 '>
                    <h3 className='text-warning'>About</h3>
                    <h1>YYYY YYYY</h1>
                    <p>Whoever replaces Speaker Nancy Pelosi will face the daunting task of presiding over the increasingly tense debate about whether Democrats will be the party of the activist.</p>
                    <div className=''>
                        <div className='icon'>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter mx-4"></i>
                        <i className="fab fa-instagram-square mx-2"></i>
                        <i className="fas fa-rss px-4"></i>
                        </div>
                    </div>

                </div>
                <div className='col-md-3 '>
                    <h3 className='text-warning'>Information</h3>
                    <div className='info'>
                    <h5>About Us</h5>
                    <h5>More Search</h5>
                    <h5>Blogs</h5>
                    <h5>Testimonial</h5>
                    <h5>Events</h5>
                    </div>
                </div>
                <div className='col-md-3 '>
                    <h3 className='text-warning'>Helpful Links</h3>
                    <h5>Services</h5>
                    <h5>Stories</h5>
                    <h5>Terms & Condition</h5>
                    <h5>Privacy Policy</h5>
                   
                </div>
                <div className='col-md-3'>
                    <h3 className='pb-3'>Subscribe</h3>
                    <input className='input' placeholder='Enter Your Email'></input> <br/> <br/>
                    <button className='bg-warning text-dark subscribe'>Subscribe</button>
                </div>
            </div>
            <h4 className=''>&copy;2021 YYY YYY All Right Reserved.</h4>
        </div>
    );
};

export default Footer;
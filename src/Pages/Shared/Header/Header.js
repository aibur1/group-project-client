import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, handleLogOut } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand text-warning me-5 fs-4 fw-bold" to="/">THE BLOGER</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-dark fw-bold" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/blogs">Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {
                            user.email ?
                                <span className="nav-item user-part">
                                    <button onClick={handleLogOut}>Logout <i className="fas fa-sign-out-alt"></i></button>
                                    <span className="nav-item">
                                        {
                                            user.photoURL ?
                                                <img width="48px" className="rounded-circle" src={user?.photoURL} alt="user" />
                                                :
                                                <img width="48px" className="rounded-circle" src={`https://i.ibb.co/jwLpZMr/user-profile.png`} alt="user" />
                                        }
                                    </span>

                                </span>
                                :
                                <span className="nav-item user-part">
                                    <NavLink className="nav-link text-dark fw-bold" to="/login"><button>Login <i className="fas fa-sign-in-alt"></i></button></NavLink>
                                </span>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
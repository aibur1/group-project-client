import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {handleGoogleLogin} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // login with google 
    const loginWithGoogle = () =>{
        handleGoogleLogin(location, navigate);
    }
    return (
        <div>
            <h2>This is login page</h2>
            <button onClick={loginWithGoogle}>Google</button>
        </div>
    );
};

export default Login;
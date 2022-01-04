import axios from "axios";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
// import initializeAuthentication from "../Login/Firebase/firebase.init";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    // sign in with google button click 
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // log in with google provider
    const handleGoogleLogin = (location, navigate) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                handleLoginUserStore(result?.user?.displayName, result?.user?.email);
                setUser(result.user);
                const redirect_url = location?.state?.from || '/';
                navigate(redirect_url);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };


    // register a new user using form create
    const handleCreateNewUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                setUser(result.user);
                const newUser = { email, displayName: name };
                setUser(newUser);
                // update user when successfully created an account
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    handleStoreUserData(result?.user?.displayName, result?.user?.email);
                }).catch((error) => {
                    setError(error.message);
                });
                history.replace('/');
                // store user to database 
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    };


    // log in a existing user 
    const handleUserLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                const redirect_url = location?.state?.from || '/';
                handleLoginUserStore(result.user.displayName, result.user.email);
                history.push(redirect_url);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // log out when button click 
    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then((result) => {
                setUser({});
            })
            .finally(() => setIsLoading(false));

    };

    // always keep user update profile
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    //store user data to server (mongoDb)
    const handleStoreUserData = (name, email) => {
        const userInfo = { name, email };
        console.log(userInfo);
        axios.post('https://infinite-escarpment-16645.herokuapp.com/users', userInfo)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('User Successfully store');
                }
            })
    }

    // handle store user login or google login data 
    const handleLoginUserStore = (name, email) => {
        const userInfo = { name, email };
        fetch('https://infinite-escarpment-16645.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // console.log(data);
                    // alert('New user Added');
                }
            })
    }


    return {
        handleGoogleLogin,
        handleCreateNewUser,
        handleUserLogin,
        handleLogOut,
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
    }

};

export default useFirebase;
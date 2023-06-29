import React, {useContext, useEffect} from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import {auth, provider} from "../../services/firebaseConfig.js";
import { signInWithPopup } from "firebase/auth"
import { useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/auth-context.js";

const Login = () => {
    const navigate = useNavigate()

    const currentUser = useContext(AuthContext)

    useEffect(()=>{

        currentUser.setUser(JSON.parse(localStorage.getItem("user")))
    },[])


    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("user", JSON.stringify(result.user));
            currentUser.setUser(JSON.parse(localStorage.getItem("user")))
            navigate('/')
        })
    }

    return (
        <div>
            <Navigation />
            <div>Sign In with Google</div>
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    );
};

export default Login;
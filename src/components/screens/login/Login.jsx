import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import { auth, provider } from "../../services/firebaseConfig.js";
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";







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

    const loginWithEmail = (email, password, cb) =>{
        const auth = getAuth();

        signInWithEmailAndPassword(auth, email, password, cb)
            .then((userCredential) => {
                localStorage.setItem("user", JSON.stringify(userCredential.user));
                cb(userCredential.user)
                navigate('/')
            })
            .catch((error) => {
                console.log(error.code, error.message)
            });
    }

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <Navigation />
            <div>
                <input type="text" onChange={(e) => setLogin(e.target.value)} placeholder='email'/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <button onClick={() => loginWithEmail(login, password, currentUser.setUser)}>Sign In</button>
            </div>
            <div>
                <div>Log In with Google</div>
                <button onClick={signInWithGoogle}>Log In</button>
            </div>
            <div>
                <p>If you dont have an account</p>
                <button onClick={() => navigate('/signin')}>Sing In </button>
            </div>


        </div>
    );
};

export default Login;
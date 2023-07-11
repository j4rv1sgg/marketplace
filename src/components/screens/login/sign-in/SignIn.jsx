import React, {useState} from 'react';
import Navigation from "../../home/nav/Navigation.jsx";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {AuthContext} from "../../../context/auth-context.js";
import {useContext} from "react";


const addNewUser = (email, password, name, cb) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            cb(userCredential.user);
        })
        .then(() => {
            updateProfile(auth.currentUser, {
                displayName: name
            })})
        .catch((error) => {
            console.log(error.code, error.message)
        });
}


const SignIn = () => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    const user = useContext(AuthContext)

    return (
        <div>
            <Navigation/>
            <div>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder='full name'/>
                <input type="text" onChange={(e) => setLogin(e.target.value)} placeholder='email'/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                <button onClick={() => addNewUser(login, password, name, user.setUser)}>Sign In</button>

            </div>
            
        </div>
    );
};

export default SignIn;
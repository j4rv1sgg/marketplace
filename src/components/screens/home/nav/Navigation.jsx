import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css'
import {AuthContext} from "../../../context/auth-context.js";


const Navigation = () => {
    const urls = [
        {
            text: 'Catalog',
            path: '/',
        },
        {
            text: 'Add car',
            path: '/addcar',
        }
    ]

    const currentUser = useContext(AuthContext)
    const signOut = () => {
        localStorage.removeItem("user")
        currentUser.setUser(null)
    }

    return (
        <div className={styles.nav}>

            {urls.map( (item) => {

                return <Link key={item.path} className='btn' to={item.path}>{item.text}</Link>

            })}
            {currentUser.user ?
                <Link className='btn' to='/login' onClick={signOut}>Sigh Out</Link>
                :
                <Link className='btn' to='/login' >Log In</Link>

            }

        </div>
    );
};

export default Navigation;
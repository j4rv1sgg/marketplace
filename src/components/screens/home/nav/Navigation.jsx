import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
    const urls = [
        {
            text: 'Catalog',
            path: '/',
        },
        {
            text: 'Add car',
            path: '/addcar',
        },
        {
            text: 'Login',
            path: '/login',
        }
    ]

    const signOut = () => {
        localStorage.removeItem("user")
    }

    return (
        <div className={styles.nav}>

            {urls.map( (item) => {

                return <Link key={item.path} className='btn' to={item.path}>{item.text}</Link>

            })}
            <Link className='btn' to='/login' onClick={signOut}>Sigh Out</Link>

        </div>
    );
};

export default Navigation;
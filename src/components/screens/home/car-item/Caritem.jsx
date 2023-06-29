import styles from "../Home.module.css";
import React from "react";
import {Link} from "react-router-dom";


const Caritem = ({ car }) => {
    return (

        <div className={styles.item}
             key={car.id}>
            <div
                className={styles.image}
                style={{
                    backgroundImage: `url(${car.image}`,
                }}
            />
            <div className={styles.info}>
                <h1>{car.name}</h1>
                <p>{
                    new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(car.price)
                }
                </p>

                <Link className='btn' to={`/car/${car.id}`}>Read More </Link>
            </div>
        </div>
    );
};

export default Caritem;
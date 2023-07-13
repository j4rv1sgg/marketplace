import styles from "../Home.module.css";
import React from "react";
import {useNavigate} from "react-router-dom";
import {getPriceFormat} from "../../../services/getPriceFormat.js";
import moment from "moment";
import Button from "../../../UI/button/Button.jsx";


const Caritem = ({ car, edit}) => {
    const navigate = useNavigate()
    return (

        <div className={styles.item}
             key={car.id}>
            <div
                className={styles.image}
                onClick={()=>navigate(`/car/${car.id}`)}
                style={{
                    backgroundImage: `url(${car.images[0].url}`,
                    cursor: 'pointer'
                }}
            />
            <div className={styles.info}>
                <h1>{car.brand} {car.model}</h1>
                <h3>{car.year}</h3>
                <p>{ getPriceFormat(car.price) }</p>
                <p> Added {moment().from(car.added, 'minutes')} ago </p>
                {edit ? <Button onClick={()=>navigate(`/edit/${car.id}`)} title={'Edit'}/> : <></>}
            </div>

        </div>
    );
};

export default Caritem;
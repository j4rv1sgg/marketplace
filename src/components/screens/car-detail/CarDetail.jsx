import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import Navigation from "../home/nav/Navigation.jsx";
import { getListItem, removeListItem} from "../../services/firebaseService.js";
import {auth} from "../../services/firebaseConfig.js";
import 'swiper/css';
import Slider from "../../UI/swiper/Swiper.jsx";
import {getPriceFormat} from "../../services/getPriceFormat.js";



const CarDetail = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [car, setCar] = useState({})

    const setup = async () => {
        setCar(await getListItem("cars", id))
    }

    const remove = async () => {
        await removeListItem("cars", id)
        navigate('/')
    }

    useEffect(() => {
        setup()
    },[])



    return (
        <div>
            <Navigation/>
            {car.brand ?
                (
                    <div>

                        <Slider images = {car.images.map( obj => { return obj.url })} />
                        <h1>{car.brand} {car.model}</h1>
                        <h2>{getPriceFormat(car.price)}</h2>
                        <p>Seller: {car.author.name} </p>
                        {auth.currentUser.uid === car.author.uid && (
                            <button className="btn" onClick={remove}> Remove </button>
                        )}
                        {/*<p>Added {moment().startOf(car.added).fromNow()}</p>*/}


                    </div>

                ) : <p>Car is not found</p>
            }


        </div>
    );
};

export default CarDetail;
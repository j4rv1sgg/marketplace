import React, {useEffect, useState} from 'react';
import { useParams, useNavigate} from "react-router-dom";
import Caritem from "../home/car-item/Caritem.jsx";
import Navigation from "../home/nav/Navigation.jsx";
import { getListItem, removeListItem} from "../../services/firebaseService.js";


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
            {car.name ?
                (
                    <div>
                        <Caritem car = {car} />
                        <p>Seller: {car.author.name} </p>
                        <button className="btn" onClick={() => remove()}> Remove </button>
                    </div>
                ) : <p>Car is not found</p>

            }
        </div>
    );
};

export default CarDetail;
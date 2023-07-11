import React, {useEffect, useState} from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import AddCar from "../home/add-car/AddCar.jsx";
import {useParams} from "react-router-dom";
import {getListItem} from "../../services/firebaseService.js";

const CarEdit = () => {
    const [car, setCar] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        const getCar = async () => {
            const result = await getListItem('cars', id);
            setCar(result);
        };

        getCar();
    }, [id]);



    return (
        <div>
            {car && <AddCar car={car}/>}
        </div>
    );
};

export default CarEdit;
import React from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import AddCar from "../home/add-car/AddCar.jsx";
import {useParams} from "react-router-dom";
import {getListItem} from "../../services/firebaseService.js";

const CarEdit = () => {
    const { id } = useParams()
    const getCar = async () => {
        const car = await getListItem('cars', id)
        return car
    }
    console.log(getCar())

    return (
        <div>
            <AddCar car={getCar()}/>
        </div>
    );
};

export default CarEdit;
import React from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import AddCar from "../home/add-car/AddCar.jsx";
import {useParams} from "react-router-dom";
import {getListItem} from "../../services/firebaseService.js";

const CarEdit = () => {
    const { id } = useParams()
    let result
    const getCar = async () => {
        result = await getListItem('cars', id)
        return result
    }

    console.log(result)

    return (
        <div>
            <AddCar car={getCar()}/>
        </div>
    );
};

export default CarEdit;
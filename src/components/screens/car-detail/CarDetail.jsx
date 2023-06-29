import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Caritem from "../home/car-item/Caritem.jsx";
import Navigation from "../home/nav/Navigation.jsx";

import { doc, getDoc } from "firebase/firestore";
import {db} from "../../services/firebaseConfig.js";



const CarDetail = () => {
    const { id } = useParams()
    const [car, setCar] = useState({})

    const docRef = doc(db, "cars", id);

    useEffect(() => {
        const getCar = async () => {
            const res = await getDoc(docRef)
            if(res.exists()){
                setCar(res.data())
            } else console.log('Failed request')
        }
        getCar()
    }, [id])

    if (!car?.name) return <p>Car is not found</p>

    return (
        <div>
            <Navigation/>
            <Caritem car = {car} />
        </div>
    );
};

export default CarDetail;
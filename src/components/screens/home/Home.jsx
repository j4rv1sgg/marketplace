import React, {useEffect, useState} from 'react';
import styles from './Home.module.css'
import {collection, getDocs} from "firebase/firestore"
import Navigation from "./nav/Navigation.jsx";
import CarList from "./car-list/CarList.jsx";
import {db} from "../../services/firebaseConfig.js";

const Home = () => {

    const carsCollectionRef = collection(db, "cars")
    const [cars, setCars] = useState([])

    useEffect(() => {
        const getCars = async () => {
            const data = await getDocs(carsCollectionRef)
            data.forEach(doc => {
                const car = {...doc.data(), id: doc.id}
                setCars((prev)=> [...prev, car])
            })
        }
        getCars()
    },[])

    return (
        <div>
            <Navigation/>
            <h1>Catalog</h1>
            <CarList data = { cars }/>
        </div>
    );
};

export default Home;
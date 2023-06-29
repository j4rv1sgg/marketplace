import React, {useState} from 'react';
import styles from './AddCar.module.css'
import Navigation from "../nav/Navigation.jsx";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../../../services/firebaseConfig.js";
import {useNavigate} from "react-router-dom";

const clearData = {
    name: '',
    price: '',
    image: ''
}


const AddCar = () => {
    const [data, setData] = useState(clearData)

    const navigate = useNavigate()
    const carsCollectionRef = collection(db, 'cars')

    const createCar = async () => {
        await addDoc(carsCollectionRef, {
            name: data.name,
            price: data.price,
            image: data.image}
        )
        navigate('/')
    }


    return (
        <>
            <Navigation/>
            <div className={styles.form}>
                <input placeholder="Title" onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name} type="text"/>
                <input placeholder="Price" onChange={e => setData(prev => ({...prev, price: e.target.value}))} value={data.price} type="text"/>
                <input placeholder="Image" onChange={e => setData(prev => ({...prev, image: e.target.value}))} value={data.image} type="text"/>
                <button className="add" onClick={ createCar } >Add</button>
            </div>
        </>
    );
};

export default AddCar
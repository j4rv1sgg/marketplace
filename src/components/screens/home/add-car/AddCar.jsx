import React, {useContext, useState} from 'react';
import styles from './AddCar.module.css'
import Navigation from "../nav/Navigation.jsx";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../../../services/firebaseConfig.js";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/auth-context.js";
import { getTime } from '../../../services/getCurrentTime.js'
import Input from "../../../UI/input/Input.jsx";



const AddCar = ({ car }) => {
    console.log(car.price)
    let clearData = {
        brand: '',
        model: '',
        year: '',
        price: '',
        images: ''
    }

    if(car){
         clearData = {
            brand: car.brand,
            model: car.model,
            year: car.year,
            price: car.price,
            images: ''
        }

    }
    console.log(Boolean(car))


    const [data, setData] = useState(clearData)
    const [images, setImages] = useState([])
    const [imagesInput, setImagesValue] = useState('')

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    const carsCollectionRef = collection(db, 'cars')


    const createCar = async () => {

        await addDoc(carsCollectionRef, {
            brand: data.brand,
            model: data.model,
            price: Number(data.price),
            year: data.year,
            images: images,
            author: {
                uid: user.uid,
                name: user.displayName
            },
            added: getTime()
        }
        )

        navigate('/')
    }

    const addImage = () => {
        setImages([...images, imagesInput])
        setImagesValue('')
    }




    return (
        <>
            <Navigation/>
            <div className={styles.form}>
                <Input placeholder={"Brand"} setter={setData} field={'brand'} value={data.brand} type={"text"}/>
                <Input placeholder={"Model"} setter={setData} field={'model'} value={data.model} type={"text"}/>
                <Input placeholder={"Price"} setter={setData} field={'price'} value={data.price} type={"text"}/>
                <Input placeholder={"Year of production"} setter={setData} field={'year'} value={data.year} type={"text"}/>
                <input placeholder="Add images" onChange={(e) => setImagesValue(e.target.value)} value={imagesInput} type='text'/>
                <button onClick={addImage}> Add image </button>
                <button className="add" onClick={createCar} >Add car</button>
            </div>
        </>
    );
};

export default AddCar
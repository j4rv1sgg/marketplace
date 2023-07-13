import React, {useContext, useState} from 'react';
import styles from './AddCar.module.css'
import Navigation from "../nav/Navigation.jsx";
import {addDoc, collection} from "firebase/firestore"
import {db} from "../../../services/firebaseConfig.js";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/auth-context.js";
import { getTime } from '../../../services/getCurrentTime.js'
import Input from "../../../UI/input/Input.jsx";
import {updateListItem} from "../../../services/firebaseService.js";
import {storage} from "../../../services/firebaseConfig.js";
import {getDownloadURL, ref, uploadBytes} from "firebase/storage"
import { v4 } from 'uuid'


const AddCar = ({ car }) => {

    let clearData = {
        brand: '',
        model: '',
        year: '',
        price: '',

    }

    if(car){
         clearData = {
            brand: car.brand,
            model: car.model,
            year: car.year,
            price: car.price,

        }

    }
    const [data, setData] = useState(clearData)

    const [imageUpload, setImageUpload] = useState([])

    const { user } = useContext(AuthContext)

    const navigate = useNavigate()
    const carsCollectionRef = collection(db, 'cars')


    const createCar = async () => {
        const imageUrlArray = await imageUrls();

        await addDoc(carsCollectionRef, {
            brand: data.brand,
            model: data.model,
            price: Number(data.price),
            year: data.year,
            images: imageUrlArray,
            author: {
                uid: user.uid,
                name: user.displayName
            },
            added: getTime()
        });

        navigate('/');
    };


    const uploadImageToStore = async (imageFile, path) => {
        const imagePath = `${path}/${imageFile.name + v4()}`
        const imageRef = ref(storage, imagePath)
        await uploadBytes(imageRef, imageFile)
        return await getDownloadURL(ref(storage, imagePath))
    }

    const imageUrls = async () => {
        const urls = [];
        await Promise.all([...imageUpload].map(async (file) => {
            const imageId = v4();
            const url = await uploadImageToStore(file, `cars/`);
            urls.push({
                url: url,
                name: file.name,
                id: imageId
            });
        }));
        return urls;
    };


    return (
        <>
            <Navigation/>
            <div className={styles.form}>
                <Input placeholder={"Brand"} setter={setData} field={'brand'} value={data.brand} type={"text"}/>
                <Input placeholder={"Model"} setter={setData} field={'model'} value={data.model} type={"text"}/>
                <Input placeholder={"Price"} setter={setData} field={'price'} value={data.price} type={"text"}/>
                <Input placeholder={"Year of production"} setter={setData} field={'year'} value={data.year} type={"text"}/>

                <input type="file" multiple onChange={(event) => setImageUpload(event.target.files)}/>

                {
                    !car
                        ?
                        <>
                            <button onClick={createCar} >Add car</button>

                            {/*<button onClick={imageUrls} >Add car</button>*/}
                            {/*<button onClick={()=>console.log(urls)} >Add car</button>*/}
                        </>
                        :
                        <>
                            <button onClick={()=>updateListItem('cars', car.id, data)} > Save </button>
                        </>
                }

            </div>
        </>
    );
};

export default AddCar
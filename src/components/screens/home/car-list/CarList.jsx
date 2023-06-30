import React, {useEffect, useState} from 'react';
import Caritem from "../car-item/Caritem.jsx";
import { getList } from "../../../services/firebaseService.js"

const CarList = () => {

    const [cars, setCars] = useState([])

    const setup = async () => {
        setCars(await getList("cars"))
    }
    useEffect(()=>{
        setup()
    },[])

    return (
        <div>
            {cars.length ? cars.map(car => {
                return(
                    <Caritem key={ car.id } car={ car }/>
                )
            })
            : <p>There is no cars.</p>
            }
        </div>
    );
};

export default CarList;
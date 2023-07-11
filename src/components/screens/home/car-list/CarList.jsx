import React, {useEffect, useState} from 'react';
import Caritem from "../car-item/Caritem.jsx";
import { getList } from "../../../services/firebaseService.js"
import Filters from "../filters/Filters.jsx";

const CarList = () => {
    const [filters, setFilters] = useState(null)
    const [order, setOrder] = useState({order: 'added', desc: true})
    const [cars, setCars] = useState([])
    const [fromPrice, setFromPrice] = useState('')
    const [toPrice, setToPrice] = useState('')

    const setup = async () => {
        setCars(await getList({path: "cars", filter_by: filters, order_by: order }))
        if(fromPrice){
            setCars(cars.filter(car => car.price >= fromPrice))
        }
        if(toPrice){
            setCars(cars.filter(car => car.price <= toPrice))

        }

    }

    useEffect(()=>{
        setup()
    },[filters])


    return (
        <div>
            <Filters setFilters = {setFilters} setOrder = {setOrder} setFromPrice={setFromPrice} setToPrice={setToPrice}/>

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
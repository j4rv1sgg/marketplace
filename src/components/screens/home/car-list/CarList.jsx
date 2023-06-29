import React from 'react';
import Caritem from "../car-item/Caritem.jsx";

const CarList = ({ data }) => {
    return (
        <div>
            {data.length ? data.map(car => {
                return(
                    <Caritem key={car.id} car={car}/>
                )
            })
            : <p>There is no cars.</p>
            }
        </div>
    );
};

export default CarList;
import React, {useContext, useEffect, useState} from 'react';
import Navigation from "../home/nav/Navigation.jsx";
import {getList} from "../../services/firebaseService.js";
import {AuthContext} from "../../context/auth-context.js";
import Caritem from "../home/car-item/Caritem.jsx";

const Profile = () => {
    const [cars, setCars] = useState([])
    const auth = useContext(AuthContext)

    const setup = async () => {
        setCars(await getList({
            path: "cars",
            filter_by: [{field: 'author.uid', operator: '==', value: auth.user.uid}],
            order_by: 'author.uid'
        }))


    }

    useEffect(() => {
        setup()
    }, [])

    return (
        <div>
            <Navigation/>
            <h1>Profile</h1>

            {cars.length ? cars.map(car => {
                    return(
                        <>
                            <Caritem key={ car.id } car={ car } edit={true}/>
                        </>
                    )
                })
                : <p>You have no added cars</p>
            }


            <h3>Your ads:</h3>

        </div>
    );
};

export default Profile;
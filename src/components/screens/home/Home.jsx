import React from 'react';

import Navigation from "./nav/Navigation.jsx";
import CarList from "./car-list/CarList.jsx";

const Home = () => {

    return (
        <div>
            <Navigation/>
            <h1>Catalog</h1>
            <CarList/>
        </div>
    );
};

export default Home;
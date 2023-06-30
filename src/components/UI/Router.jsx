import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../screens/home/Home.jsx";
import CarDetail from "../screens/car-detail/CarDetail.jsx";
import Login from "../screens/login/Login.jsx";
import AddCar from "../screens/home/add-car/AddCar.jsx";
import PrivateRoutes from "./PrivateRoute.jsx";

const Router = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path='/addcar' element={<AddCar />}/>
                        <Route path='/car/:id' element={<CarDetail/>}/>
                    </Route>

                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<div> Page is not found </div>}/>
                </Routes>
            </BrowserRouter>

    );
};

export default Router;
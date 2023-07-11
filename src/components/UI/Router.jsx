import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../screens/home/Home.jsx";
import CarDetail from "../screens/car-detail/CarDetail.jsx";
import Login from "../screens/login/Login.jsx";
import AddCar from "../screens/home/add-car/AddCar.jsx";
import PrivateRoutes from "./PrivateRoute.jsx";
import SignIn from "../screens/login/sign-in/SignIn.jsx";
import Profile from "../screens/profile/Profile.jsx";
import CarEdit from "../screens/car-edit/CarEdit.jsx";

const Router = () => {

    return (
            <BrowserRouter>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path='/addcar' element={<AddCar />}/>
                        <Route path='/edit/:id' element={<CarEdit/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                    </Route>
                    <Route path='/signin' element={<SignIn/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/car/:id' element={<CarDetail/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<div> Page is not found </div>}/>
                </Routes>
            </BrowserRouter>

    );
};

export default Router;
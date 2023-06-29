import {Outlet, Navigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/auth-context.js";

const PrivateRoutes = () => {
    const auth = useContext(AuthContext)

    return(
        auth.user ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default  PrivateRoutes
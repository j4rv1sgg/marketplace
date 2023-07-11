import React, {useEffect, useState} from 'react';
import {AuthContext} from "./components/context/auth-context.js";
import Router from "./components/UI/Router.jsx";

const App = () => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")))
    },[])

    return (
        <div>
            <AuthContext.Provider value={{user, setUser}}>

                        <Router />

            </AuthContext.Provider>
        </div>
    );
};

export default App;
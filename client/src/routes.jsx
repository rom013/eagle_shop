import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {
    const auth = localStorage.getItem("auth");
    return auth ? children : <Navigate to="/login" />
}

const RoutesPages = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/user" 
                element={
                    <Private>
                        <User/>
                    </Private>
                } 
            />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesPages;

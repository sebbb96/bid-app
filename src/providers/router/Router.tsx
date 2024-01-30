import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Login, Products, Register } from '../../pages';

const Router: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </>
    );
};

export default Router;

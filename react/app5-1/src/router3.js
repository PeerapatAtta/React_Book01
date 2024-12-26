import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './navlink.css';
import Products from './products';

export default function Router3() {
    return (
        <BrowserRouter>
            <nav className='nav'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Home</NavLink> -&nbsp;
                <NavLink to="/products" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Product</NavLink> -&nbsp;
                <NavLink to="/member" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'} >Member</NavLink> -&nbsp;
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Contact</NavLink> -&nbsp;
            </nav>
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h1>App5-1</h1>
                                <h2>Home</h2>
                                <h3>Welcome to the Home Page</h3>
                                Product list <a href='/products'>Products</a>
                            </div>
                        }
                    />
                    <Route path="/products" element={<Products />} />
                    <Route path="/member" element={<Products />} />
                    <Route path="/contact" element={<Products />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
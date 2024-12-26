import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './navlink.css';

export default function Router2() {
    return (
        <BrowserRouter>
            <nav className='nav'>
                <NavLink to="/" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Home</NavLink> -&nbsp;
                <NavLink to="/Product" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Product</NavLink> -&nbsp;
                <NavLink to="/Member" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'} >Member</NavLink> -&nbsp;
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'menu active_menu' : 'menu'}>Contact</NavLink> -&nbsp;

            </nav>
        </BrowserRouter>
    );
}
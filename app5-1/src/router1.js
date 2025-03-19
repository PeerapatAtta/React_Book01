import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export default function Router1() {
    const navStyle = {
        backgroundColor: 'black',
        padding: '10px',
        textAlign: 'center',
    };

    const linkStyle = {
        display: 'inline-block',
        color: 'white',
        margin: '0 10px',
        textDecoration: 'none',
    };

    return (
        <BrowserRouter>
            <nav style={navStyle}>
                <Link style={linkStyle} to="/">Home</Link>
                <Link style={linkStyle} to="/about">About</Link>
                <Link style={linkStyle} to="/services">Services</Link>
                <Link style={linkStyle} to="/contact">Contact</Link>
            </nav>
        </BrowserRouter>
    );
}
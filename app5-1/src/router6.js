
import React from 'react'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import './route.css'

export default function Router6() {
    return (
        <>
            <BrowserRouter>
                <h2>Router6 - Redirect</h2>

                <nav>
                    <Link to="/">Home</Link> -&nbsp;
                    <Link to="/js">JavaScript</Link> -&nbsp;
                    <Link to="/js/react">React</Link> -&nbsp;
                    <Link to="/js/react/native">React Native</Link>
                </nav>

                <div className="content" style={{ borderBottom: '2px solid black', paddingBottom: '20px' }}>
                    <Routes>
                        <Route path="/" element={<h4>Home Page</h4>} />
                        <Route path="/js" element={<h4>JavaScript Page</h4>} />
                        <Route path="/js/react" element={<h4>React Page</h4>} />
                        <Route path="/js/react/native" element={<h4>React Native Page</h4>} />                        
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    )
}
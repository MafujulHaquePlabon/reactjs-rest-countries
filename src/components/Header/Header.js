import React from 'react';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <h1 style={{color:'green'}}>Welcome to my rest countries</h1>
            <nav className="nav-anchor">
                <a href="/home">Home</a>
                <a href="/about us">About Us</a>
                <a href="/details">Details</a>
                <a href="/next">Next</a>
            </nav>
        </div>
    );
};

export default Header;
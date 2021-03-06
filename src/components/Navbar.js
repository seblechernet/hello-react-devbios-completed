import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/"><img className="brand" src={logo} alt='logo'/></Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/bios" className="nav-link">Developer Bios</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/create-bio" className="nav-link" >Create Bios</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/search" className="nav-link" >Search</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

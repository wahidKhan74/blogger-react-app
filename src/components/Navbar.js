import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar (props) {
    return (        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Bolgger App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink className="nav-link" exact="true" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/posts">Posts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/users">Users</NavLink>
                </li>
                <li className="nav-item">
                    {
                     (props.isLoggedIn=='true') ? (
                            <NavLink className="nav-link" to="/logout">Logout</NavLink>
                        ) :
                        (
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        )
                    }
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/register">Register</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/features" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                    Features
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <NavLink className="dropdown-item" to="/features/products" >Products</NavLink>
                    <NavLink className="dropdown-item" to="/features/courses" >Cources</NavLink>
                    <NavLink className="dropdown-item" to="/features/blogs" >Blogs</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                
                </li>
                </ul>
            </div>
        </nav>
    )
}
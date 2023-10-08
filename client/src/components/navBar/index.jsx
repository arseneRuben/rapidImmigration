import React from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



const NavBar = () => {
  const location = useLocation();
  return (
   
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
            <h1 className="m-0 text-danger">Canada Quick Immigration</h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-n3">
                <NavLink to="/" className={`nav-item nav-link ${location.pathname==="/" && 'active'}`}>
                    Home
                </NavLink>
                <NavLink to="/services" className={`nav-item nav-link ${location.pathname==="/services" && 'active'}`}>
                    Services
                </NavLink>
                <NavLink to="/contact" className={`nav-item nav-link ${location.pathname==="/contact" && 'active'}`}>
                    Contact
                </NavLink>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        
                        <NavLink to="/contact" className={`dropdown-item ${location.pathname==="/contact" && ' bg-danger'}`}>Contact</NavLink>
                        <NavLink to="/services" className={`dropdown-item ${location.pathname==="/services" && ' bg-danger'}`}>Services</NavLink>
                        <NavLink to="/signup" className={`dropdown-item ${location.pathname==="/signup" && ' bg-danger'}`}>Sign Up</NavLink>
                        <NavLink to="/signin" className={`dropdown-item ${location.pathname==="/signin" && ' bg-danger'}`}>Sign In</NavLink>
                    </div>
                </div>
             
            </div>
        </div>
    </nav>
  )
}

export default NavBar
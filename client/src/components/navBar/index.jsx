import React from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";



const NavBar = () => {
  const location = useLocation();
  return (
   
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <NavLink to="/" className="navbar-brand p-0">
            <h1 className="m-0 text-primary">Canada Quick Immigration</h1>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 me-n3">
                <NavLink to="/" className={`nav-item nav-link ${location.pathname==="/" && 'active'}`}>
                    Home
                </NavLink>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="blog.html"    className="dropdown-item">Blog Grid</a>
                        <a href="detail.html"  className="dropdown-item">Blog Detail</a>
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="quote.html"  className="dropdown-item">Quote Form</a>
                        <NavLink to="/signup" className={`dropdown-item ${location.pathname==="/signup" && 'active'}`}>Sign Up</NavLink>
                        <NavLink to="/signin" className={`dropdown-item ${location.pathname==="/signin" && 'active'}`}>Sign In</NavLink>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default NavBar
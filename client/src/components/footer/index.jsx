import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from "react-router-dom";

import React from 'react'
import { faHomeAlt, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
   <>
     <div className="container-fluid bg-danger text-white bg-gradient text-secondary p-5 mt-5">
        <div className="row g-5">
            <div className="col-12 text-center">
                <h1 className="display-5 mb-4">Stay Update!!!</h1>
                <form className="mx-auto" >
                    <div className="input-group">
                     <input type="text" className="form-control border-white p-3" placeholder="Your Email"/>
                        <button className="btn btn-dark px-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-secondary p-5">
        <div className=" d-flex justify-content-evenly g-5">
         
            <div className="">
                <h3 className="text-white mb-4">Popular Links</h3>
                <div className="d-flex flex-column justify-content-start">
                    <NavLink to="/"  className="text-secondary mb-2" ><i className="bi bi-arrow-right text-danger me-2"></i><FontAwesomeIcon icon={faHomeAlt} /></NavLink>
                    <NavLink to="/services" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-danger me-2"></i>Our Services</NavLink>
                    <NavLink to="/" className="text-secondary mb-2" ><i className="bi bi-arrow-right text-danger me-2"></i><FontAwesomeIcon icon={faNewspaper} /></NavLink>
                    <NavLink to="/contact" className="text-secondary" ><i className="bi bi-arrow-right text-danger me-2"></i><FontAwesomeIcon icon={faPhone} /></NavLink>
                </div>
            </div>
            <div className="">
                <h3 className="text-white mb-4">Get In Touch</h3>
                <p className="mb-2"><i className="bi bi-geo-alt text-danger me-2"></i>123 Street, New York, USA</p>
                <p className="mb-2"><i className="bi bi-envelope-open text-danger me-2"></i>info@example.com</p>
                <p className="mb-0"><i className="bi bi-telephone text-danger me-2"></i>+012 345 67890</p>
            </div>
            <div className="">
                <h3 className="text-white mb-4">Follow Us</h3>
                <div className="d-flex">
                    <a className="btn btn-lg btn-danger btn-lg-square rounded-circle me-2" href="#"> <FontAwesomeIcon icon={faFacebook} /></a>
                    <a className="btn btn-lg btn-danger btn-lg-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="btn btn-lg btn-danger btn-lg-square rounded-circle me-2" href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-dark text-secondary text-center border-top py-4 px-5" >
        <p className="m-0">&copy; <a className="text-secondary border-bottom" href="https://www.linkedin.com/in/ars%C3%A8ne-fokam-poka-045467a0/">Arsene Fokam Pola </a>. All Rights Reserved. Designed by <a className="text-secondary border-bottom" href="https://htmlcodex.com">RUSWEL CONSULTING INFORMATION PROCESSING</a></p>
    </div>
   </>
  )
}

export default Footer
import React, { useState, useEffect } from 'react';
import FrontPages from '..'
import { NavLink } from "react-router-dom";

import axios from "axios";
var path = require('path');

const HomePage = () => {
    const [users, setUsers] = useState([]); 

    useEffect(() => {
        axios
          .get(
            `http://localhost:8080/api/users`
          )
          .then((res) => setUsers(res.data))
          .catch((error) => console.log(error));
    }, []);
  return (
    <>
    <FrontPages >
     <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" >
                            <h5 className="text-white text-uppercase">Immigration Consultancy</h5>
                            <h1 className="display-1 text-white mb-md-4">We Provide Solution On Your Immigration project</h1>
                            <NavLink to="/services#quote" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</NavLink>
                            <NavLink to="/contact" className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" >
                            <h5 className="text-white text-uppercase">Immigration Consultancy</h5>
                            <h1 className="display-1 text-white mb-md-4">Take Our Help To Reach The Top Level</h1>
                            <NavLink to="/services#quote" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</NavLink>
                            <NavLink to="/contact" className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
    <div className="container-fluid py-6 px-5">
        <div className="text-center mx-auto mb-5">
            <h1 className="display-5 mb-0">Equipes d'experts</h1>
            <hr className="w-25 mx-auto bg-primary"/>
        </div>
        <div className="row g-5">
        {users.map(user=> (
            <div className="col-lg-3">
                <div className="team-item position-relative overflow-hidden">
                    <img className="img-fluid w-100" src={`http://localhost:8080${path.sep}profiles${path.sep}${user.profile_image}`} alt=""/>
                    <div className="team-text w-100 position-absolute top-50 text-center bg-danger p-4">
                        <h3 className="text-white">{user.first_name}</h3>
                        <p className="text-white text-uppercase mb-0">Lawyer</p>
                    </div>
                </div>
            </div>
            ))
        }  
        </div>
    </div>
    </FrontPages>
    </>
  )
}

export default HomePage
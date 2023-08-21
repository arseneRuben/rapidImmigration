import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faHomeAlt, faPhoneAlt, faTachometerAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'


const TopBar = () => {
  return (
   
    <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
    <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
            <NavLink className="text-body py-2 pe-3 border-end" to="/"> <FontAwesomeIcon icon={faHomeAlt} /> </NavLink>
            <NavLink className="text-body py-2 px-3 border-end" to="/admin"><FontAwesomeIcon icon={faTachometerAlt} /></NavLink>
                <a className="text-body py-2 px-3 border-end" href=""><FontAwesomeIcon icon={faUserSecret} /></a>
                <a className="text-body py-2 px-3 border-end" href=""><small>Policy</small></a>
                <a className="text-body py-2 ps-3" href=""><small>Career</small></a>
            </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                <div className="me-3 pe-3 border-end py-2"> 
                    <p className="m-0"> <FontAwesomeIcon icon={faEnvelopeOpen} />  send@quickimmigration.com</p>
                </div>
                <div className="py-2">
                    <p className="m-0"> <FontAwesomeIcon icon={faPhoneAlt} /> +012 345 6789</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TopBar
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faHomeAlt, faPhoneAlt, faSignIn, faSignOut, faTachometerAlt, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import {  message } from 'antd'
import {  useNavigate } from 'react-router-dom'


const TopBar = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const {user} = useSelector((state) => state.user)

  const handleLogout = (e) => {
        localStorage.removeItem('user')
        localStorage.clear()
        navigate('/')
        message.success("Logout successful")
        window.location.reload()
  };

  return (
   
    <div className="container-fluid bg-info ps-5 pe-0 d-none d-lg-block">
    <div className="row gx-0">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
            <NavLink className={`text-body py-2 px-3 border-end  ${location.pathname==="/" && 'bg-primary-subtle'}` } to="/"> <FontAwesomeIcon icon={faHomeAlt} /> </NavLink>
            <NavLink className={`text-body py-2 px-3 border-end  ${location.pathname==="/folders" && 'bg-primary-subtle'}` } to="/folders"><FontAwesomeIcon icon={faTachometerAlt} /></NavLink>
            <NavLink className={`text-body py-2 px-3 border-end  ${location.pathname==="/profile" && 'bg-primary-subtle'}` } to="/profile"><FontAwesomeIcon icon={faUserSecret} /></NavLink>
            { user ?  <span className="text-body py-2 px-3 border-end"  ><FontAwesomeIcon icon={faSignOut} onClick={handleLogout}/></span> : <NavLink className={`text-body py-2 px-3 border-end  ${location.pathname==="/signin" && 'bg-primary-subtle'}` } to="/signin"><FontAwesomeIcon icon={faSignIn} /></NavLink>}
                <a className="text-body py-2 px-3 border-end" href=""><small>Policy</small></a>
                <a className="text-body py-2 ps-3" href=""><small>Career</small></a>
            </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-danger text-white top-shape px-5">
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
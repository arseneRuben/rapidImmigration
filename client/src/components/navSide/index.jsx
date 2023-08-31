import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faBarChart, faDesktop, faEdit, faEnvelopeOpen, faPhoneAlt, faQrcode, faSitemap, faTable, faTachometerAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import user from '../../img/user.jpg'
import { NavLink, useLocation } from 'react-router-dom'

const NavSide = () => {
  const location = useLocation();
  return (
    <nav className="navbar-default navbar-side" role="navigation">
            <div className=" bg-white  show">
                <ul className="nav  flex-column align-items-center d-flex justify-content-between " id="main-menu">
                    <li className=" nav-item text-center user-image-back">
                       <img src={user} className="img-responsive img-fluid img-thumbnail" />
                    </li>
                    <li className=' nav-item p-1 m-2 '>
                    <NavLink to='/admin' className={` bg-light text-dark  ${location.pathname==="/admin" && 'bg-primary-subtle'}` } > <FontAwesomeIcon icon={faTachometerAlt} /></NavLink> 
                    </li>
                    <li className=' nav-item p-1 m-2 '>
                    <NavLink to='/profile' className={` bg-light text-dark  ${location.pathname==="/profile" && 'bg-primary-subtle'}` } > <FontAwesomeIcon icon={faUserEdit} /></NavLink> 
                    </li>
                   {/*<li className=' nav-item '>
                        <a href="#"><FontAwesomeIcon icon={faEdit} />UI Elements<span className="fa arrow"></span></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="#">Notifications</a>
                            </li>
                            <li>
                                <a href="#">Elements</a>
                            </li>
                            <li>
                                <a href="#">Free Link</a>
                            </li>
                        </ul>
                    </li> */}

                    <li className=' nav-item  p-2  m-2'>
                        <a href="#"><FontAwesomeIcon icon={faTable} /></a>
                    </li>
                    <li className=' nav-item  p-2  m-2 '>
                         <NavLink to='../folders/new'  className=' bg-light text-dark' ><FontAwesomeIcon icon={faEdit} /> </NavLink>
                    </li>

                     {/*
                    <li className=' nav-item '>
                        <a href="#"><FontAwesomeIcon icon={faSitemap} />Multi-Level Dropdown <FontAwesomeIcon icon={faArrowDown} /></a>
                        <ul className="nav nav-second-level">
                            <li>
                                <a href="#">Second Level Link</a>
                            </li>
                            <li>
                                <a href="#">Second Level Link</a>
                            </li>
                            <li>
                                <a href="#">Second Level Link<span className="fa arrow"></span></a>
                                <ul className="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Link</a>
                                    </li>

                                </ul>

                            </li>
                        </ul>
                </li> */}
                    <li className=' nav-item  p-2  m-2'>
                        <a href="#"><FontAwesomeIcon icon={faQrcode} /></a>
                    </li>
                    <li className=' nav-item   p-2  m-2'>
                        <a href="#"><FontAwesomeIcon icon={faBarChart} /></a>
                    </li>

                    <li className=' nav-item  p-2  m-2'>
                        <a href="#"><FontAwesomeIcon icon={faEdit} /> </a>
                    </li>
                    <li className=' nav-item  p-2  m-2'>
                        <a href="blank.html"><FontAwesomeIcon icon={faTable} /></a>
                    </li>  
                </ul>
 
            </div>

    </nav>
  )
}

export default NavSide
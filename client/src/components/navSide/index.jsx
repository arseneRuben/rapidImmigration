import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBell, faFolderClosed, faList, faPeopleGroup,  faPlusSquare,  faSitemap, faUser, faUserEdit } from '@fortawesome/free-solid-svg-icons'
import defaultProfile from '../../img/user.jpg'
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { baseURL } from '../../api'
var path = require('path');

const NavSide = () => {
  const location = useLocation();
  const {user} = useSelector((state) => state.user)
  return (
    <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
            <div className="dropdown pb-4">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={user ? `${baseURL}${path.sep}profiles${path.sep}${user.profile_image}` : defaultProfile} alt="hugenerd" width="50" height="50" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">{user && user.first_name}</span>
                    </a>
                
                </div>
            <div className=" bg-white  show">
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="main-menu">
                    <li className=' nav-item p-1 m-1 '>
                        <NavLink to='/profile' className={` nav-link align-middle px-0   ${location.pathname==="/profile" && 'bg-primary-subtle'}` } > <FontAwesomeIcon icon={faUserEdit} /> <span className="ms-1 d-none d-sm-inline">Profile</span></NavLink> 
                    </li>
                    <li className=' nav-item   p-1  m-1'>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                         <FontAwesomeIcon icon={faFolderClosed} /> <span className="ms-1 d-none d-sm-inline">Dossiers</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li>
                                <NavLink to='/folders' className="nav-link px-2"> <FontAwesomeIcon icon={faList} />  </NavLink>
                            </li>
                            <li className="w-100">
                                <NavLink to='/folder/new' className="nav-link px-2"> <FontAwesomeIcon icon={faPlusSquare} /> </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className=' nav-item p-1 m-1 '>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                         <FontAwesomeIcon icon={faPeopleGroup} /> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li>
                                <NavLink to='/customers' className="nav-link px-2"> <FontAwesomeIcon icon={faList} />  </NavLink>
                            </li>
                            <li className="w-100">
                                <NavLink to='/customers/new' className="nav-link px-2"> <FontAwesomeIcon icon={faPlusSquare} /> </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className=' nav-item   p-1  m-1'>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                         <FontAwesomeIcon icon={faSitemap} /> <span className="ms-1 d-none d-sm-inline">Programs</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li>
                                <NavLink to='/programs' className="nav-link px-2"> <FontAwesomeIcon icon={faList} />  </NavLink>
                            </li>
                            <li className="w-100">
                                <NavLink to='/program/new' className="nav-link px-2"> <FontAwesomeIcon icon={faPlusSquare} /> </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className=' nav-item p-1 m-1 '>
                        <a href="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                         <FontAwesomeIcon icon={faBell} /> <span className="ms-1 d-none d-sm-inline">Quotes</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li>
                                <NavLink to='/quotes' className="nav-link px-2"> <FontAwesomeIcon icon={faList} />  </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className=' nav-item p-1 m-1 '>
                        <a href="#submenu5" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                         <FontAwesomeIcon icon={faUser} /> <span className="ms-1 d-none d-sm-inline">Users</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li>
                                <NavLink to='/users' className="nav-link px-2"> <FontAwesomeIcon icon={faList} />  </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                   
                  
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                    </li>
                   
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavSide
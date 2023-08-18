import React from 'react'

const SideBar = () => {
  return (
   
    <aside className="sidebar navbar-default" role="navigation">
    <div className="sidebar-nav navbar-collapse">

        <ul className="nav" id="side-menu">
            <li className="sidebar-search">
                <div className="input-group custom-search-form">
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </li>
            <li>
                <a href="#" className="active"><i className="fa fa-dashboard fa-fw"></i> Dashboard</a>
            </li>
            <li>
                <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                <ul className="nav nav-second-level">
                    <li>
                        <a href="#">Second Level Item</a>
                    </li>
                    <li>
                        <a href="#">Third Level <span class="fa arrow"></span></a>
                        <ul className="nav nav-third-level">
                            <li>
                                <a href="#">Third Level Item</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

    </div>
</aside>
  )
}

export default SideBar
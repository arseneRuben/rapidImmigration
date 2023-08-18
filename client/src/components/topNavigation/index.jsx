import React from 'react'

const TopNavigation = () => {
  return (
   
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Startmin</a>
                </div>

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

             
                <ul className="nav navbar-nav navbar-left navbar-top-links">
                    <li><a href="#"><i className="fa fa-home fa-fw"></i> Website</a></li>
                </ul>

              
                <ul className="nav navbar-right navbar-top-links">
                    <li className="dropdown navbar-inverse">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-bell fa-fw"></i> <b class="caret"></b>
                        </a>
                        <ul className="dropdown-menu dropdown-alerts">
                            <li>
                                <a href="#">
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a className="text-center" href="#">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i className="fa fa-user fa-fw"></i> secondtruth <b className="caret"></b>
                        </a>
                        <ul className="dropdown-menu dropdown-user">
                            <li>
                                <a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li className="divider"></li>
                            <li>
                                <a href="#"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
  )
}

export default TopNavigation
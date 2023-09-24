import React from 'react'
import { useLocation } from "react-router-dom";
import AdminPages from '../../adminpages';

const PageWrapper = ({children}) => {
    const location = useLocation();
    function Title({ pathname }) {
        switch(pathname) {
          case '/admin':
            return "Dashboard"
          case '/profile':
            return "Edit profile"
          case '/folders/new':
            return "New Folder"
          case 'error':
            return "Error"
          default:
            return null
        }
    }

   
    return (
        <AdminPages>
        <div id="page-wrapper">
            <div id="page-inner">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2><Title pathname={location.pathname}/></h2>
                    </div>
                </div>
                <div className="row">
                <div className="col-2">
                        </div>
                    <div className="col-md-8 card">
                        {children}
                    </div>
                    <div className="col-2">
                        </div>
                </div>
                <hr />
            </div>
        </div>
        </AdminPages>
    )
}

export default PageWrapper
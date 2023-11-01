import React, {useState, useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";
import AdminPages from '../../adminpages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleExclamation, faClock, faComments, faTasks } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import moment from 'moment';
import { baseURL } from "../../api";

const PageWrapper = ({children}) => {
    const location = useLocation();
    const [quotes, setQuotes] = useState([]); 
    const unVisitedQuotes = quotes.filter(quote =>!quote.visited);
    const lastQuote = unVisitedQuotes[unVisitedQuotes.length - 1]

    useEffect(() => {
            axios
              .get(
                `${baseURL}/api/quotes`
              )
              .then((res) => setQuotes(res.data))
              .catch((error) => console.log(error));
    }, []);
     

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
               
                    <div className="col-10 card">
                        {children}
                    </div>
                    <div className="col-2">
                    <div className="panel panel-default">
        <div className="panel-heading">
            <NavLink to="/quotes" className="btn bg-primary bg-gradient btn-block">
                <span className="fa-stack fa-2x" data-count={unVisitedQuotes.length}>
                    <FontAwesomeIcon icon={faBell}/>  
                </span>
            </NavLink>

        </div>
        <div className="panel-body">
            <div className="list-group">
            
            <a href="#" className="list-group-item">
                                  <FontAwesomeIcon icon={faClock}/> 

                                      <span className="pull-right text-muted  m-1"><em>{lastQuote!=undefined ? moment(lastQuote.created_at).fromNow(): ""}</em>
                                      </span>
            </a>
                
                <a href="#" className="list-group-item">
                <FontAwesomeIcon icon={faCircleExclamation}/>
                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                    </span>
                </a>
                
            </div>
        </div>
    </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
        </AdminPages>
    )
}

export default PageWrapper
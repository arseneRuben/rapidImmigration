import React , {useState, useMemo}from 'react'
import {useDispatch} from 'react-redux'
import { useLocation,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const PageWrapper = ({children}) => {
    const location = useLocation();
    const {usr} = useSelector((state) => state.user)

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

    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const [user, setUser] = useState(usr);
    
    const handleChange = (name) => (e) => {
        setUser({ ...user, [name]: e.target.value });
    };
     

   


    return (
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
                    {/*}   {(location.pathname === '/profile') && 
                            <PersonnalInfo  handleChange={handleChange}  user={user}/>}
                       {(location.pathname === '/profile') && <button className='m-3 btn btn-primary '   onClick={handleSave}>Save</button>} 

                        {(location.pathname === '/admin' || location.pathname=== '/folders/new') &&
                            <NewFolder /> }
                    */}
                    </div>
                    <div className="col-2">
                        </div>
                        
                </div>
            
                <hr />
            {/*  <div className="row">
                    <div className="col-md-4">
                    
                    </div>
                    <div className="col-md-4">
                        <label>Click to see blank page</label>
                        <a href="blank.html" target="_blank" className="btn btn-danger btn-lg btn-block">BLANK PAGE</a>
                    </div>
                    <div className="col-md-4">
                        For More Examples Please visit official bootstrap website <a href="http://getbootstrap.com" target="_blank">getbootstrap.com</a>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <h5>Table  Sample One</h5>
                        <table className="table table-striped table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                        <h5>Table  Sample Two</h5>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="success">
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr className="info">
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr className="warning">
                                        <td>3</td>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr className="danger">
                                        <td>4</td>
                                        <td>John</td>
                                        <td>Smith</td>
                                        <td>@jsmith</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <hr />


                <div className="row">
                    <div className="col-md-4">
                        <h5>Panel Sample</h5>
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Default Panel
                            </div>
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
                            </div>
                            <div className="panel-footer">
                                Panel Footer
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Accordion Sample</h5>
                        <div className="panel-group" id="accordion">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" className="collapsed">Collapsible Group Item #1</a>
                                    </h4>
                                </div>
                                <div id="collapseOne" className="panel-collapse collapse" >
                                    <div className="panel-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
                                    </h4>
                                </div>
                                <div id="collapseTwo" className="panel-collapse in">
                                    <div className="panel-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.

                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className="collapsed">Collapsible Group Item #3</a>
                                    </h4>
                                </div>
                                <div id="collapseThree" className="panel-collapse collapse">
                                

                                        <div className="panel-body">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5>Tabs Sample</h5>
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#home" data-toggle="tab">Home</a>
                            </li>
                            <li className=""><a href="#profile" data-toggle="tab">Profile</a>
                            </li>
                            <li className=""><a href="#messages" data-toggle="tab">Messages</a>
                            </li>

                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade active in" id="home">
                                <h4>Home Tab</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="profile">
                                <h4>Profile Tab</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                </p>

                            </div>
                            <div className="tab-pane fade" id="messages">
                                <h4>Messages Tab</h4>
                                <p >
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit eserunt mollit anim id est laborum.
                                </p>

                            </div>

                        </div>
                    </div>

                </div>
            
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <h5>Information</h5>
                            This is a type of bare admin that means you can customize your own admin using this admin structured  template . For More Examples of bootstrap elements or components please visit official bootstrap website <a href="http://getbootstrap.com" target="_blank">getbootstrap.com</a>
                        . And if you want full template please download <a href="http://www.binarytheme.com/bootstrap-free-admin-dashboard-template/" target="_blank" >FREE BCORE ADMIN </a>&nbsp;,&nbsp;  <a href="http://www.binarytheme.com/free-bootstrap-admin-template-siminta/" target="_blank" >FREE SIMINTA ADMIN</a> and <a href="http://binarycart.com/" target="_blank" >FREE BINARY ADMIN</a>.

                    </div>
                </div>
    */}

            </div>
        
        </div>
    )
}

export default PageWrapper
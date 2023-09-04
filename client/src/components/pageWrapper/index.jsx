import React , {useState}from 'react'
import { useLocation } from "react-router-dom";
import NewFolder from '../../folder/new';
import PersonnalInfo from '../folder/steps/PersonnalInfo';

const PageWrapper = () => {
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
      const [userData, setUserData] = useState(null);
      
     
      const handleChange = (name) => (e) => {
        setUserData({ ...userData, [name]: e.target.value });
      };
     

      const handleSave = async (event) => {
        try {
          
          //const res = await axios.post('/api/users/update', event)
          /*if(res.data.success) {
            localStorage.setItem('token', res.data.token)
            message.success('Login success')
            if(res.data.access_level === 'client') {
              navigate('/')
            }
            else{
               navigate('/admin')
            }
          }else {
            message.error(res.data.message)
          } */
         
        } catch (error) {
          console.log(error)
        }
      }
    
    
      function MainComponent({ pathname }) {
        switch(pathname) {
          case '/admin':
            return  <NewFolder />
          case '/profile':
            return <PersonnalInfo handleChange={handleChange}  user={userData}/>
          case '/folders/new':
            return <NewFolder />
          case '/error':
            return "Error"
          default:
            return null
        }
      }
  return (
    <div id="page-wrapper">
        <div id="page-inner">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2><Title pathname={location.pathname}/></h2>
                </div>
            </div>
           
            <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-6">
                    <h5>Widget Box One</h5>
                    <div className="panel panel-primary text-center no-boder bg-color-blue">
                        <div className="panel-body">
                            <i className="fa fa-bar-chart-o fa-5x"></i>
                            <h3>120 GB </h3>
                        </div>
                        <div className="panel-footer back-footer-blue">
                            Disk Space Available
                        </div>
                    </div>
                </div>
                <div className="col-md-6 card">
                   <MainComponent  pathname={location.pathname}   />
                   {(location.pathname === '/profile') && <button className='m-3 btn btn-primary '   onClick={handleSave}>Save</button>}
                </div>
                <div className="col-md-3 col-sm-3 col-xs-6">
                    <h5>Widget Box Two</h5>
                    <div className="alert alert-info text-center">
                        <i className="fa fa-desktop fa-5x"></i>
                        <h3>100$ </h3>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
            </div>
        
            <hr />
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label>Text Input Example</label>
                        <input className="form-control" />
                        <p className="help-block">Help text here.</p>
                    </div>
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
        

        </div>
    
    </div>
  )
}

export default PageWrapper
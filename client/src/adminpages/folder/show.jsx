import React , {useState, useEffect} from 'react';
import PageWrapper from '../../components/pageWrapper'
import { useParams, NavLink, useNavigate} from 'react-router-dom';
import {  useDispatch, useSelector} from 'react-redux';
import IdentityReport from '../../components/customer/reports/IdentityReport';
import ContactReport from '../../components/customer/reports/ContactReport';
import FileReport from '../../components/customer/reports/FileReport';
import MaritalReport from '../../components/customer/reports/MaritalReport';
import SpinnerCustom from '../../redux/SpinnerCustom';
import ProgramReport from '../../components/customer/reports/ProgramReport';
import axios from "axios";
import OtherReport from '../../components/customer/reports/OtherReport';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteFolder } from '../../actions/folder';

var path = require('path');
const ShowFolder = () => {
    const { id } = useParams();
    const {isLoading, folders} = useSelector((state)=> state.folders)
    const folder = folders.find((folder) => folder.id === parseInt(id))
    const [others, setOthers] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    function deleteFold(id){
        dispatch(showLoading())
        dispatch(deleteFolder(id))
        navigate(`/folders`);
        window.location.reload(false);

        dispatch(hideLoading())
    }
    
    useEffect(() => {
        axios
        .get(
            `http://localhost:8080/api/others/customer/${folder.customerId}`
        )
        .then((res) => setOthers(res.data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <PageWrapper>
        {isLoading ? <SpinnerCustom /> :
            <div className="d-flex flex-column align-items-center">
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-head h3"> Customer's folder </div>
                    <div className="card-body row gx-4 gx-lg-5">
                    <div className="row">
                                <div className="col-md-6 mb-5">
                                    <IdentityReport client={folder}/>
                                </div>
                                
                                <div className="col-md-6 mb-5">
                                    <ContactReport client={folder}/>
                                </div>
                    </div>
                    <div className=" row ">
                            `   <div className="col-md-8 mb-5">
                                            <FileReport client={folder}/>
                                </div>
                                <div className="col-md-3 mb-5">
                                            <MaritalReport client={folder}/>
                                </div>
                            </div>
                    </div>
                    <div className=" row ">
                        <div className="col-6 mb-5">
                            <ProgramReport program={folder}/>
                        </div>
                        <div className="col-6 mb-5">
                        <   OtherReport others={others}/>
                        </div>

                    </div>
                    <div class="card-footer d-flex justify-content-evenly"> 
                        <NavLink to={`/folder/${id}/edit`} className="navbar-brand p-0">
                            <button class="btn btn-warning btn-sm float-left"> 
                                <FontAwesomeIcon icon={faEdit} />
                            </button> 
                            </NavLink>
                                
                            
                                
                            <button class="btn btn-danger btn-sm float-right"
                                onClick={()=>deleteFold(id)}
                                    > 
                                <FontAwesomeIcon icon={faTrash} /> 
                            </button> 
                        </div>

                </div>
            </div>
        }
    </PageWrapper>
  )
}

export default ShowFolder
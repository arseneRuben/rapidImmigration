import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { deleteFolder } from '../../api';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';

const ClientList =  () => {
    const {isLoading, folders} = useSelector((state)=> state.folders)
    const dispatch = useDispatch()

    function deleteCLient(id){
        dispatch(showLoading())
        deleteFolder(id)
        window.location.reload(false);
        dispatch(hideLoading())
    }

  
        
  return (
    <PageWrapper>
        <div class="row">
                <div class="col-lg-12">
                        <div class="panel panel-default">
                                <div class="panel-heading text-center h3">
                                       Folders
                                </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                        {isLoading ? <Spinner /> :
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th>FullName</th>
                                                        <th>Passport</th>
                                                        <th>Consultant</th>
                                                        <th>Birthday</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {folders.map((folder)=> (
                                                        <tr class="gradeC"  key={folder.id}>
                                                            <td>{folder.first_name }</td>
                                                            <td>{folder.passport_number }</td>
                                                            <td>{folder.consultant_id }</td>
                                                            <td className="center">{folder.birth_date }</td>
                                                            <td className="center"><button   className="btn btn-warning"><NavLink to={`/folder/${folder.id}/edit`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faUserEdit} /></NavLink></button><button className="btn btn-info"><NavLink to={`/folder/${folder.id}/show`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faEye} /></NavLink></button><button className="btn btn-danger"> <FontAwesomeIcon  onClick={()=>deleteCLient(folder.id)} icon={faTrash} /></button></td>
                                                        </tr>
                                                    ))
                                                    }
                                                   
                                                </tbody>
                                            </table>
                                        }
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        <nav aria-label="..." className="d-flex  justify-content-center">
            <ul className="pagination">
                <li className="page-item disabled">
                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item">
                <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </PageWrapper>
  )
}

export default ClientList
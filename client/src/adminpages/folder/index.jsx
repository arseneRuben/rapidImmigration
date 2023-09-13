import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Spinner } from 'react-bootstrap';

const ClientList =  () => {
    //const [folders, setFolders] = useState([]);
    const {isLoading, folders} = useSelector((state)=> state.folders)
 

    

  return (
    <PageWrapper>
        <div class="row">
                <div class="col-lg-12">
                        <div class="panel panel-default">
                                <div class="panel-heading">
                                        DataTables Advanced Tables
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
                                                        <th>Address</th>
                                                        <th>Birthday</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {folders.map((folder)=> (
                                                        <tr class="gradeC" key={folder.id}>
                                                            <td>{folder.first_name }</td>
                                                            <td>{folder.passport_number }</td>
                                                            <td>{folder.consultant_id }</td>
                                                            <td className="center">{folder.address }</td>
                                                            <td className="center">{folder.birthday }</td>
                                                            <td className="center"><button className="btn btn-warning"> <FontAwesomeIcon icon={faUserEdit} /></button><button className="btn btn-info"> <FontAwesomeIcon icon={faEye} /></button><button className="btn btn-danger"> <FontAwesomeIcon icon={faTrash} /></button></td>
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
        <nav aria-label="...">
            <ul class="pagination">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </PageWrapper>
  )
}

export default ClientList
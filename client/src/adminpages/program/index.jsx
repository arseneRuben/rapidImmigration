import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';

const Programs =  () => {
    const {isLoading, programs} = useSelector((state)=> state.programs)
    console.log(programs)
    const dispatch = useDispatch()

    function deleteProgram(id){
        dispatch(showLoading())
        deleteProgram(id)
        window.location.reload(false);
        dispatch(hideLoading())
    }

  
        
  return (
    <PageWrapper>
        <div class="row">
                <div class="col-lg-12">
                        <div class="panel panel-default">
                                <div class="panel-heading text-center h3">
                                       Immigration programs
                                </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                        {isLoading ? <Spinner /> :
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>description</th>
                                                      
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {programs.map((program)=> (
                                                        <tr class="gradeC"  key={program.id}>
                                                            <td>{program.name }</td>
                                                            <td>{program.description }</td>
                                                             <td className="center"><button   className="btn btn-warning"><NavLink to={`/programs/${program.id}/edit`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faUserEdit} /></NavLink></button><button className="btn btn-info"><NavLink to={`/programs/${program.id}/show`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faEye} /></NavLink></button><button className="btn btn-danger"> <FontAwesomeIcon  onClick={()=>deleteProgram(program.id)} icon={faTrash} /></button></td>
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

export default Programs
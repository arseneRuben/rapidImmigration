import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { deleteCustomer } from '../../api';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import SpinnerCustom from '../../redux/SpinnerCustom';

const ClientList =  () => {
    const {isLoading, customers} = useSelector((state)=> state.customers)
    const dispatch = useDispatch()

    function deleteCLient(id){
        dispatch(showLoading())
        deleteCustomer(id)
        window.location.reload(false);
        dispatch(hideLoading())
    }

  
        
  return (
    <PageWrapper>
        <div class="row">
                <div class="col-lg-12">
                        <div class="panel panel-default">
                                <div class="panel-heading text-center h3">
                                       Customers
                                </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                        {isLoading ? <SpinnerCustom /> :
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
                                                    {customers.map((customer)=> (
                                                        <tr class="gradeC"  key={customer.id}>
                                                            <td>{customer.first_name }</td>
                                                            <td>{customer.passport_number }</td>
                                                            <td>{customer.consultant_id }</td>
                                                            <td className="center">{customer.birth_date }</td>
                                                            <td className="center"><button   className="btn btn-warning"><NavLink to={`/customer/${customer.id}/edit`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faUserEdit} /></NavLink></button><button className="btn btn-info"><NavLink to={`/customer/${customer.id}/show`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faEye} /></NavLink></button><button className="btn btn-danger"> <FontAwesomeIcon  onClick={()=>deleteCLient(customer.id)} icon={faTrash} /></button></td>
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
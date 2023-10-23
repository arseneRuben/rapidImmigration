import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import axios from "axios";
import { deleteUser, toggle } from '../../api';

const UserList =  () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [users, setUsers] = useState([]);

 
    

    useEffect(() => {
        axios
          .get(
            `http://localhost:8080/api/users`
          )
          .then((res) => {
            setUsers(
               res.data
            );
          })
          .catch((error) => console.log(error));
    }, []);
 

    
  function deleteItem(id){
    deleteUser(id)
    window.location.reload(false);
}
function toggleItem(id){
    toggle(id)
    window.location.reload(false);
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
                                    
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th>FullName</th>
                                                        <th>LastName</th>

                                                        <th>Roles</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.map((customer)=> (
                                                        <tr class="gradeC"  key={customer.id}>
                                                            <td>{customer.first_name }</td>
                                                            <td>{customer.last_name }</td>

                                                            <td>{customer.access_level }</td>
                                                            <td className="center"><button  onClick={()=>toggleItem(customer.id)} className={`btn  ${customer.enabled=="1" ? 'btn-warning': 'btn-primary' }` }> <FontAwesomeIcon  icon={faUserEdit} /></button><button  onClick={()=>deleteItem(customer.id)} className="btn btn-danger"> <FontAwesomeIcon  icon={faTrash} /></button></td>
                                                        </tr>
                                                    ))
                                                    }
                                                   
                                                </tbody>
                                      </table>
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>

    </PageWrapper>
  )
}

export default UserList
import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import SpinnerCustom from '../../redux/SpinnerCustom';
import { deleteFolder } from '../../actions/folder';
import Paginate from '../../components/pagination/Paginate';


const Folder =  () => {
    const {isLoading, folders, pageLimit, currentPage, paginationMode} = useSelector((state)=> state.folders)
    const dispatch = useDispatch()
    console.log(folders)

    function deleteFold(id){
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
                                       Customer's folders
                                    </div>
                                    <div class="panel-body">
                                        <div class="table-responsive">
                                        {isLoading ? <SpinnerCustom /> :
                                            <table class="table table-striped table-bordered table-hover" id="dataTables-example">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Customer</th>
                                                        <th>Program</th>
                                                        <th>LastVisit</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {folders.map((folder)=> (
                                                        <tr class="gradeC"  key={folder.folderNumber}>
                                                            <td>{folder.folderNumber }</td>
                                                            <td>{`${folder.first_name} ${folder.last_name}`  }</td>
                                                            <td>{folder.name }</td>
                                                            <td>{folder.lastVisit }</td>
                                                             <td className="center"><button   className="btn btn-warning"><NavLink to={`/folder/${folder.id}/edit`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faUserEdit} /></NavLink></button><button className="btn btn-info"><NavLink to={`/folder/${folder.id}/show`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faEye} /></NavLink></button><button className="btn btn-danger"> <FontAwesomeIcon  onClick={()=>deleteFold(folder.id)} icon={faTrash} /></button></td>
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
        <Paginate/>
    </PageWrapper>
  )
}

export default Folder
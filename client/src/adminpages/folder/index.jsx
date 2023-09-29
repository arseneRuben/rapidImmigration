import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { useSelector,useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { hideLoading, showLoading } from '../../redux/features/alertSlice';
import SpinnerCustom from '../../redux/SpinnerCustom';
import { deleteFolder, getFolders } from '../../actions/folder';
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";



const Folder =  () => {
    const {isLoading, folders} = useSelector((state)=> state.folders)
    const [filter, setFilter] = useState("");

    const dispatch = useDispatch()
    const [state, setState] = useState({
        data: folders,
        currentPage: 1
    });
    useEffect(() => {
            axios
              .get(
                `http://localhost:8080/api/folders?page=1&filter=${filter}`
              )
              .then((res) => {
                setState((prev) => ({
                  ...prev,
                  data: res.data
                }));
              
              })
              .catch((error) => console.log(error));
        }, []);
        const handlePageChange = (pageNumber) => {
            setState((prev) => ({ ...prev, activePage: pageNumber }));
            dispatch(getFolders(pageNumber, filter))
          };

    
    

    function deleteFold(id){
        dispatch(showLoading())
        deleteFolder(id)
        window.location.reload(false);
        dispatch(hideLoading())
    }

    function resetFilter() {
        setFilter("");
        dispatch(getFolders(state.currentPage, ""));
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
                                                        <tr class="gradeC"  key={folder.id}>
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
                                    <div className="panel-footer">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h6>Total Count <span className="label label-info">{folders.length}</span></h6>
                                            </div>
                                            <div className="col-md-6">
                                                <Pagination className="d-flex justify-content-around">
                                                    {folders.map((_, index) => {
                                                    return (
                                                        <Pagination.Item
                                                        onClick={() => handlePageChange(index + 1)}
                                                        key={index + 1}
                                                        active={index + 1 === state.activePage}
                                                        >
                                                        {index + 1}
                                                        </Pagination.Item>
                                                    );
                                                    })}
                                                </Pagination>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
        <div class="row">
             <div className="col-6">
                <div className="form-group d-flex ">
                    <label htmlFor="filter">Filter</label>
                    <input
                        type="text"
                        className="form-control m-3"
                        id="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <button className="btn btn-primary m-3" onClick={() => handlePageChange(1)}> Filter </button>   
                    <button className="btn btn-secondary m-3" onClick={() => resetFilter()}> Reset </button>
                </div>
             </div>
        </div>
        
    </PageWrapper>
  )
}

export default Folder
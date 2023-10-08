import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCircleExclamation, faEye, faTasks, faTrash, faUserEdit } from '@fortawesome/free-solid-svg-icons';
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
    const [newOrder, setNewOrder] = useState("asc");
    const [orderBy, setOrderBy] = useState("id");
    
    const dispatch = useDispatch()
    const [state, setState] = useState({
        data: folders,
        currentPage: 1
    });
    useEffect(() => {
            axios
              .get(
                `http://localhost:8080/api/folders?page=1&filter=${filter}&orderBy=${orderBy}&newOrder=${newOrder}`
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
            dispatch(getFolders(pageNumber, filter, orderBy, newOrder))
          };

    
    

    function deleteFold(id){
        dispatch(showLoading())
        dispatch(deleteFolder(id))
        window.location.reload(false);
        dispatch(hideLoading())
    }

    function resetFilter() {
        setFilter("");
        dispatch(getFolders(state.currentPage, "", orderBy, newOrder));
    }

   
    function handleSortingOrder(event) {
        setNewOrder(newOrder === "asc" ? "desc" : "asc")
        if(newOrder === "asc"){
            event.target.classList.add("sorting_desc")
            event.target.classList.remove("sorting_asc")
        }
        else{
            event.target.classList.add("sorting_asc")
            event.target.classList.remove("sorting_desc")
        }
        setOrderBy(event.target.id)
        dispatch(getFolders(state.currentPage, filter, orderBy, newOrder))
    }
        
  return (
    <>
    <PageWrapper>
       <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center h3">
                                       Customer's folders
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                        {isLoading ? <SpinnerCustom /> :
                                            <table className="table table-striped table-bordered table-hover  dataTable">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th className='sorting_asc' onClick={(event) => handleSortingOrder(event)} id="customerId" >Customer</th>
                                                        <th className='sorting_asc' onClick={(event) => handleSortingOrder(event)} id="programId" >Program</th>
                                                        <th className='sorting_asc' onClick={(event) => handleSortingOrder(event)} id="lastVisit" >LastVisit</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {folders.map((folder)=> (

                                                        <tr className="gradeC"  key={folder.id}>
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
        <div className="row">
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
   
    </>
  )
}

export default Folder
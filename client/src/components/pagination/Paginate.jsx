/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getFolders } from '../../actions/folder';

const Paginate = ({ page }) => {
    const {isLoading, folders, pageLimit, currentPage, paginationMode} = useSelector((state)=> state.folders)
  const dispatch = useDispatch();


  useEffect(() => {
    if (page) {
      dispatch(getFolders(page));
    }
  }, [dispatch, page]);

  return (
    
        <nav aria-label="..." className="d-flex  justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${(currentPage===0) && "disabled"}`}>
                   <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">{currentPage + 1}</a>
                </li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className={`page-item ${(currentPage < pageLimit - 1) && (folders.length > pageLimit) && "disabled"}`}>
                <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>

  );
};

export default Paginate;
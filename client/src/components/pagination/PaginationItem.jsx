import React from 'react'
import { Link } from 'react-router-dom'

const PaginationItem = ({isActive, entity, currentPage}) => {
    
  return (
    <Link to={`/${entity}/page=${1}`} className={`page-item ${isActive && 'active'}`}>
        {currentPage}
    </Link>
  )
}

export default PaginationItem
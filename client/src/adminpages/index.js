import React from 'react'
import NavSide from '../components/navSide'
import TopNavigation from '../components/topNavigation'
import PageWrapper from '../components/pageWrapper'


import '../styles/backend/custom.css'

const AdminPages = () => {
  return (
    <>  
      <TopNavigation/> 
      <NavSide/>
      <PageWrapper/>
    </>
  )
}

export default AdminPages
import React from 'react'
import TopBar from '../components/topBar'
import NavBar from '../components/navBar'
import { Footer } from 'antd/es/layout/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/frontend/style.css'

const FrontPages = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Footer />
    </div>
  )
}

export default FrontPages
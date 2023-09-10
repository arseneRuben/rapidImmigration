import React from 'react'
import TopBar from '../components/topBar'
import NavBar from '../components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/frontend/style.css'
import Footer from '../components/footer'

const FrontPages = ({children}) => {
  return (
    <div>
      <TopBar />
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default FrontPages
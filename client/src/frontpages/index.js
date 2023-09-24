import React, {useEffect} from "react"
import TopBar from '../components/topBar'
import NavBar from '../components/navBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/frontend/style.css'
import Footer from '../components/footer'
import { useDispatch } from 'react-redux';
import { getPrograms } from '../actions/program'


const FrontPages = ({children}) => {
  const dispatch = useDispatch()
  useEffect(() => {
      
    dispatch(getPrograms())
  }, [])
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
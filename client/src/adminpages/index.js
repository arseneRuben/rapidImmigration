import NavSide from '../components/navSide'
import TopNavigation from '../components/topNavigation'
import React, {useEffect} from "react"
import '../styles/backend/custom.css'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getCustomers } from '../actions/customer'
import { getPrograms } from '../actions/program'
import { getFolders } from '../actions/folder'

const AdminPages = ({children}) => {
  const dispatch = useDispatch()
  // login user data
  const getUserData = async () => { 
    try {
      const token = localStorage.getItem('token')
       axios.post('http://localhost:8080/api/users/userdata',{}, { 
        headers: { Authorization: `Bearer ${token}` }
       }).then((res) => {
          if (res.data.success) {
            localStorage.setItem('user', JSON.stringify(res.data.user))
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      
      dispatch(getCustomers())
      getUserData()
      dispatch(getPrograms())
      dispatch(getFolders(1))
    }, [])
  return (
    <>  
      <TopNavigation/> 
      <NavSide/>
       {children}
    </>
  )
}

export default AdminPages
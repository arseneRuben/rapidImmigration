import NavSide from '../components/navSide'
import TopNavigation from '../components/topNavigation'
import PageWrapper from '../components/pageWrapper'
import React, {useEffect} from "react"
import '../styles/backend/custom.css'
import axios from 'axios'

const AdminPages = () => {
  // login user data
  const getUserData = async () => { 
    try {
      const token = localStorage.getItem('token')
      const res = await axios.post('/api/users/signin', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      axios.get('/api/users/user', { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          if (res.data.success) {
            localStorage.setItem('user', JSON.stringify(res.data.user))
          }
        })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
      getUserData()
    }, [])

  return (
    <>  
      <TopNavigation/> 
      <NavSide/>
      <PageWrapper/>
    </>
  )
}

export default AdminPages
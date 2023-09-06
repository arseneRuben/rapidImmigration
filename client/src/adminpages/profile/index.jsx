import React, {useState} from "react";
import PageWrapper from '../../components/pageWrapper'
import { useSelector } from 'react-redux';
import PersonnalInfo from '../../components/folder/steps/PersonnalInfo';
import { hideLoading, showLoading } from '../../components/redux/features/alertSlice'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { message } from 'antd';
import { useLocation,useNavigate } from "react-router-dom";



const ProfilePage = () => {
    const {user} = useSelector((state) => state.user)
    const [profile, setProfile] = useState({
        first_name: user && user.firt_name,
        last_name: user && user.last_name,
        gender: "",
        email: user && user.email,
        password: "",
        profile_image: "",
        birth_date: "",
      });
    const handleChange = (name) => (e) => {
        setProfile({ ...profile, [name]: e.target.value });
      };

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSave = async (event) => {
        try {
            dispatch(showLoading())
            axios.put(`http://localhost:8080/api/users/${user.id}`, profile) 
            .then(function (response) {
              if(response.status === 200){
                message.success(response.data.message)
              } else {
                message.error(response.data.message)
              }
            })
            .catch(function (error) {
              message.error(error.message)
            });
            dispatch(hideLoading())

        } catch (error) {
          console.log(error)
        } 
    }
  return (
    <PageWrapper>
       
                            <PersonnalInfo  handleChange={handleChange} user={profile}/>
                            <button className='m-3 btn btn-primary '   onClick={handleSave}>Save</button>

    </PageWrapper>
  )
}

export default ProfilePage
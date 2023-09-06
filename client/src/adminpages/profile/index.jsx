import React, {useState} from "react";
import PageWrapper from '../../components/pageWrapper'
import { useSelector } from 'react-redux';
import PersonnalInfo from '../../components/folder/steps/PersonnalInfo';
import { hideLoading, showLoading } from '../../components/redux/features/alertSlice'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import { message } from 'antd';
import { useLocation,useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";



const ProfilePage = () => {
    const {user} = useSelector((state) => state.user)
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data, event) =>  {
        const formData = new FormData();
        formData.append("file", data.profile_image[0]);
        profile["profile_image"]= data.profile_image[0].name;
        handleSave(event)
        const res = await fetch("http://localhost:8080/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
      
    };

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
                        <form  className='w-100' onSubmit={handleSubmit(onSubmit)}>
                      
                            <PersonnalInfo  handleChange={handleChange} user={profile} register={register} />
                            <div  className='d-flex justify-content-around'  >
                                <input type="submit" className='m-3 btn btn-primary btn-lg btn-block '/>
                                <input type="reset" className='m-3 btn btn-secondary btn-lg btn-block'/>
                            </div>
                        </form>
    </PageWrapper>
  )
}

export default ProfilePage
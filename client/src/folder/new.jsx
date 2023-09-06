import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import PersonnalInfo from '../components/folder/steps/PersonnalInfo';
import ContactInfo from '../components/folder/steps/ContactInfo';
import LocationInfo from '../components/folder/steps/LocationInfo';
import FilesInfo from '../components/folder/steps/FilesInfo';
import { useSelector } from 'react-redux';
import PageWrapper from "../components/pageWrapper";
import { useForm } from "react-hook-form";
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../components/redux/features/alertSlice'
import axios from 'axios'

const NewFolder = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector(state => state.user)
  const [datas, setDatas] = useState({
    first_name: user && user.firt_name,
    last_name: user && user.last_name,
    gender: "",
    passport_number: "",
    email: user && user.email,
    password: "",
    profile_image: "",
    phone_number: "",
    country: "",
    city: "",
    street: "",
    address: "",
    zip_code: "",
    birth_date: "",
    birth_place: "",
    birth_country: "",
    application_type: "",
    application_date: "",
    birth_certificate: "",
    passport: "",
    resume: "",
    other_documents: "",
    marital_status: "",
    spouse_name: "",
    marriage_certificate: "",
  });
  const [step, setStep] = useState(1);
  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    } else if(step === 4) {
        console.log(datas);
    }
  };
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  //Personal Info extraction
  const {first_name, last_name, gender,birth_date, email, password, profile_image } = datas;
  // Set PersonalInfo datas
  const [userData, setUserData] = useState({first_name, last_name, gender,birth_date, email, password, profile_image });
  const onSubmit = async (data, event) =>  {
    if(event.target.id==="submit_folder"){
    const formData = new FormData();
    formData.append("file", data.profile_image[0]);
    datas["profile_image"]= data.profile_image[0].name;
    handleSave(event)
    const res = await fetch("http://localhost:8080/upload-file", {
        method: "POST",
        body: formData,
    }).then((res) => res.json());
    message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
  }
};
const handleSave = async (event) => {
  try {
      
    dispatch(showLoading())
    axios.post('http://localhost:8080/api/folders/new', datas) 
    .then(function (response) {
      if(response.status === 200){
        message.success(response.data.message)
        navigate(`/folder/${response.data.id}/show`)
      } else {
        message.error(response.data.message)
      }
    })
    .catch(function (error) {
      message.error(error.response.data.message)
    });
    dispatch(hideLoading())

  } catch (error) {
    console.log(error)
  } 
}
  const handleChange = (name) => (e) => {
    setUserData({ ...userData, [name]: e.target.value });
    setDatas({ ...datas, [name]: e.target.value });
  };
  return (
    <PageWrapper>
      <div className=" vh-100">
      <form  className='w-100' onSubmit={handleSubmit(onSubmit)}>

        <div className="container d-flex justify-content-center align-items-center">
          <div className=" p-3 w-100 mt-5">
            {
              {
                1: <PersonnalInfo handleChange={handleChange}  user={userData} register={register} />,
                2: <ContactInfo handleChange={handleChange} />,
                3: <LocationInfo handleChange={handleChange} />,
                4: <FilesInfo handleChange={handleChange} />,
               
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step > 1 ? (
                <button className="btn btn-warning" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button className="btn btn-warning" onClick={nextStep}>
                {step === 4 ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </PageWrapper>
  )
}

export default NewFolder
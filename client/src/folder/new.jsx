import React, {useState} from "react";
import { Link, useNavigate } from 'react-router-dom'
import PersonnalInfo from '../components/folder/steps/PersonnalInfo';
import ContactInfo from '../components/folder/steps/ContactInfo';
import LocationInfo from '../components/folder/steps/LocationInfo';
import FilesInfo from '../components/folder/steps/FilesInfo';
import PageWrapper from "../components/pageWrapper";
import { useForm } from "react-hook-form";
import { message } from 'antd';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '../components/redux/features/alertSlice'
import axios from 'axios'
import Summary from "../components/folder/steps/Summary";
import { useSelector } from 'react-redux';

const NewFolder = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.user)

  const [datas, setDatas] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    passport_number: "",
    email: "",
    consultant_id: user.id,
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
    wes_report: "",
    marriage_certificate: "",
    birth_certificate: "",
    other_documents: "",
    marital_status: "",
    spouse_name: "",
   
  });
  const [step, setStep] = useState(1);
  const nextStep = (e) => {
   
    if (step < 5) {
      e.preventDefault()
      setStep(step + 1);
    } 
  };
  const prevStep = (e) => {
    e.preventDefault()
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Set PersonalInfo datas
  const onSubmit = async (data, event) =>  {
    
    const formData = new FormData();
    formData.append("profile_image", data.profile_image[0]);
    datas["profile_image"]= data.profile_image[0].name;
    formData.append("passport", data.passport[0]);
    datas["passport"]= data.passport[0].name;
    formData.append("resume", data.resume[0]);
    datas["resume"]= data.resume[0].name;
    formData.append("wes_report", data.wes_report[0]);
    datas["wes_report"]= data.wes_report[0].name;
    formData.append("other_documents", data.other_documents[0]);
    datas["other_documents"]= data.other_documents[0].name;
    formData.append("marriage_certificate", data.marriage_certificate[0]);
    datas["marriage_certificate"]= data.marriage_certificate[0].name;
    formData.append("birth_certificate", data.birth_certificate[0]);
    datas["birth_certificate"]= data.birth_certificate[0].name;
    formData.append("full_name" , `${datas.first_name} ${datas.last_name}`)
  

    handleSave(event)
    const res = await fetch("http://localhost:8080/upload-file", {
        method: "POST",
        body: formData,
    }).then((res) => res.json());
    message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
  
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
      message.error(error.message)
    });
    dispatch(hideLoading())

  } catch (error) {
    console.log(error)
  } 
}
  const handleChange = (name) => (e) => {
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
                1: <PersonnalInfo handleChange={handleChange}  user={datas} register={register} />,
                2: <ContactInfo handleChange={handleChange} client={datas}  />,
                3: <LocationInfo handleChange={handleChange} client={datas}  />,
                4: <FilesInfo client={datas} handleChange={handleChange} register={register}  />,
                5: <Summary  client={datas}  />,
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step > 1 ? (
                <button className="btn btn-warning" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button className="btn btn-warning" onClick={ nextStep }>
                {step === 5 ? "Submit" : "Next"}
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
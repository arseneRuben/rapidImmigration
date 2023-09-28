import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { message } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import ContactInfo from "../../components/customer/steps/ContactInfo";
import PersonnalInfo from '../../components/customer/steps/PersonnalInfo';
import LocationInfo from '../../components/customer/steps/LocationInfo';
import FilesInfo from '../../components/customer/steps/FilesInfo';
import Summary from "../../components/customer/steps/Summary";
import PageWrapper from "../../components/pageWrapper";
import { createCustomer } from "../../actions/customer";

const NewCustomer = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [datas, setDatas] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    profile_image: "",
    phone_number: "",
    country: "",
    city: "",
    street: "",
    address: "",
    zip_code: "",
    birth_date: "",
    birth_place: "",
    birth_city: "",
    birth_country: "",
    birth_certificate: "",
    passport: "",
    resume: "",
    wes_report: "",
    marriage_certificate: "",
    birth_certificate: "",
    marital_status: "",
    spouse_name: "",
    children: 0,
   
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
    if(data.profile_image.length > 0){
      formData.append("profile_image", data.profile_image[0]);
      datas["profile_image"]= data.profile_image[0].name;
    }
    if(data.passport.length > 0){
      formData.append("passport", data.passport[0]);
      datas["passport"]= data.passport[0].name;
    }
    if(data.resume.length > 0){
      formData.append("resume", data.resume[0]);
      datas["resume"]= data.resume[0].name;
    }
    if(data.wes_report.length > 0){
      formData.append("wes_report", data.wes_report[0]);
      datas["wes_report"]= data.wes_report[0].name;
    }
  

  if(data.marriage_certificate.length > 0){
    formData.append("marriage_certificate", data.marriage_certificate[0]);
    datas["marriage_certificate"]= data.marriage_certificate[0].name;
  }
  if(data.birth_certificate.length > 0){
    formData.append("birth_certificate", data.birth_certificate[0]);
    datas["birth_certificate"]= data.birth_certificate[0].name;
  }
  
    formData.append("full_name" , `${datas.first_name} ${datas.last_name}`)


    handleSave(event)
    const res = await fetch("http://localhost:8080/upload-file", {
        method: "POST",
        body: formData,
    }).then((res) => res.json());
    message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
  
};

const handleSave = async (event) => {
  event.preventDefault()
  dispatch(createCustomer(datas, navigate))
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
                <button className="btn btn-primary" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button  className= {step === 5 ? "btn btn-danger" : "btn btn-primary"} onClick={ nextStep }>
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

export default NewCustomer
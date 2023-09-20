import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PageWrapper from '../../components/pageWrapper';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { updateFolder } from "../../actions/folders";
import PersonnalInfo from "../../components/folder/steps/PersonnalInfo";
import ContactInfo from "../../components/folder/steps/ContactInfo";
import LocationInfo from "../../components/folder/steps/LocationInfo";
import FilesInfo from "../../components/folder/steps/FilesInfo";
import Summary from "../../components/folder/steps/Summary";

const FolderEdit = () => {
    const { id } = useParams()

    const {isLoading, folders} = useSelector((state)=> state.folders)
    const client = folders.find((client) => client.id === parseInt(id))
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.user)

    const [datas, setDatas] = useState({
      first_name: client.first_name,
      last_name: client.last_name,
      gender: client.gender,
      
      email: client.email,
      consultant_id: user.id,
      profile_image: client.profile_image,
      phone_number: client.phone_number,
      country: client.country,
      city: client.city,
      street: client.street,
      address: client.address,
      zip_code: client.zip_code,
      birth_date: client.birth_date,
      birth_place: client.birth_place,
      birth_city: client.birth_city,
      birth_country: client.birth_country,
      application_type: client.application_type,
      application_date: client.application_date,
      birth_certificate: client.birth_certificate,
      passport: client.passport,
      resume: client.resume,
      wes_report: client.wes_report,
      marriage_certificate: client.marriage_certificate,
      birth_certificate: client.birth_certificate,
      other_documents: client.other_documents,
      marital_status: client.marital_status,
      spouse_name: client.spouse_name,
      children: client.children,
     
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
    const handleSave = async (event) => {
        event.preventDefault()
        dispatch(updateFolder(datas, navigate))
      }
      const handleChange = (name) => (e) => {
          setDatas({ ...datas, [name]: e.target.value });
      };
      const onSubmit = async (data, event) =>  {
    
        const formData = new FormData();
       /* formData.append("profile_image", data.profile_image[0]);
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
        formData.append("full_name" , `${datas.first_name} ${datas.last_name}`) */
    
    
        handleSave(event)
        const res = await fetch("http://localhost:8080/upload-file", {
            method: "POST",
            body: formData,
        }).then((res) => res.json());
        message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
      
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

export default FolderEdit
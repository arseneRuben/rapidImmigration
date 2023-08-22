import React, {useState} from "react";
import PersonnalInfo from '../components/folder/steps/PersonnalInfo';
import ContactInfo from '../components/folder/steps/ContactInfo';
import LocationInfo from '../components/folder/steps/LocationInfo';
import FilesInfo from '../components/folder/steps/FilesInfo';


const NewFolder = () => {

  const [datas, setDatas] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    passport_number: "",

    email: "",
    password: "",
    profile_image: "",
    phone_number: "",
    state: "",
    city: "",
    address: "",
    zip_code: "",
    birth_date: "",
    birth_place: "",
    birth_state: "",
    birth_country: "",
    application_type: "",
    application_date: "",
   
   
    birth_certificate: "",
    passport: "",



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

  const handleChange = (name) => (e) => {
    console.log(e);
    setDatas({ ...datas, [name]: e.target.value });
    
  };


  return (
    <div className="bg-dark vh-100">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="card p-3 w-100 mt-5">
          {
            {
              1: <PersonnalInfo handleChange={handleChange}  />,
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
    </div>

  )
}

export default NewFolder
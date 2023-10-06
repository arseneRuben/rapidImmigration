import React, {useState, useRef, useEffect}  from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PageWrapper from '../../components/pageWrapper';
import { useForm } from 'react-hook-form';
import { message } from 'antd';
import { updateCustomer } from "../../actions/customer";
import PersonnalInfo from "../../components/customer/steps/PersonnalInfo";
import ContactInfo from "../../components/customer/steps/ContactInfo";
import LocationInfo from "../../components/customer/steps/LocationInfo";
import FilesInfo from "../../components/customer/steps/FilesInfo";
import Summary from "../../components/customer/steps/Summary";
import axios from "axios";

const FolderEdit = () => {
    const { id } = useParams()
    const values =[]
    const {isLoading, customers} = useSelector((state)=> state.customers)
    const client = customers.find((client) => client.id === parseInt(id))
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector((state) => state.user)
    
    const [formValues, setFormValues] = useState([]);
    const [toggle, setToggle] = useState(false);
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
      marital_status: client.marital_status,
     
    });
    const [others, setOthers] = useState([])
    useEffect(() => {
      axios
        .get(
          `http://localhost:8080/api/others/customer/${id}`
        )
        .then((res) => {

          res.data.map(other=> {
          // Extract values from DB
            values.push({
              id: other.id,
              label: other.label,
              type: other.type,
              value: other.value,
            });
          });
          // build values with others
          setOthers(res.data)
          setFormValues(values);
        })
        .catch((error) => console.log(error));
  }, []);


    const inputRef = useRef();
    const selectRef = useRef();
  
    const handleAddField = (e) => {
      e.preventDefault();
      const values = [...formValues];
      values[inputRef.current.value] = ""
  
      values.push({
        label: inputRef.current.value || "label",
        type: selectRef.current.value || "text",
        value: "",
      });
      setFormValues(values);
      setToggle(false);
    };
  
    const handleDeleteField = (e, index) => {
      const values = [...formValues];
      values.splice(index, 1);
      setFormValues(values);
    };
    const addBtnClick = (e) => {
      e.preventDefault();
      setToggle(true);
    };
  
    const handleInputChange = (e, index) => {
      const values = [...formValues];
      values[index].value = e.target.value;
      setFormValues(values);
    };

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
        dispatch(updateCustomer(datas, formValues,navigate))
    }
    const handleChange = (name) => (e) => {
          setDatas({ ...datas, [name]: e.target.value });
    };
    const onSubmit = async (data, event) =>  {
    
        const formData = new FormData();
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
               1: <PersonnalInfo handleChange={handleChange}  user={datas} register={register} toogle={toggle} inputRef={inputRef} selectRef={selectRef}  handleAddField={handleAddField} handleDeleteField={handleDeleteField}  formValues={formValues} toggle={toggle} setToggle={setToggle}  setFormValues={setFormValues} handleInputChange={handleInputChange} />,
               2: <ContactInfo handleChange={handleChange} client={datas}  toogle={toggle} inputRef={inputRef} selectRef={selectRef}  handleAddField={handleAddField} handleDeleteField={handleDeleteField}  formValues={formValues} toggle={toggle} setToggle={setToggle}  setFormValues={setFormValues} handleInputChange={handleInputChange} />,
               3: <LocationInfo handleChange={handleChange} client={datas}  toogle={toggle} inputRef={inputRef} selectRef={selectRef}  handleAddField={handleAddField} handleDeleteField={handleDeleteField}  formValues={formValues} toggle={toggle} setToggle={setToggle}  setFormValues={setFormValues} handleInputChange={handleInputChange}  />,
               4: <FilesInfo client={datas} handleChange={handleChange} register={register}  toogle={toggle} inputRef={inputRef} selectRef={selectRef}  handleAddField={handleAddField} handleDeleteField={handleDeleteField}  formValues={formValues} toggle={toggle} setToggle={setToggle}  setFormValues={setFormValues} handleInputChange={handleInputChange} />,
               5: <Summary  client={datas}   formValues={formValues}   />,
              }[step]
           }
             <div className="d-flex justify-content-around px-5 mt-5">
              {step > 1 ? (
                <button className="btn btn-primary" onClick={prevStep}>
                  Back
                </button>
               ) : null}
               {!toggle  && step >= 1 && step <= 4? (
                <button  className=  "btn btn-secondary" onClick={ addBtnClick }>
                    Other Info
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
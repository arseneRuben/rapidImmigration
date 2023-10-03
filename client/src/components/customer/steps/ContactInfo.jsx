import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import { COUNTRIES } from "../../../js/frontend/country/countries";
import Input from "./Input";

const ContactInfo = ({ handleChange, client, formValues, toogle, inputRef, selectRef, handleAddField, handleDeleteField, handleInputChange }) => {
  let citiesSelect = document.getElementById('birth_city')
  let countriesSelect = document.getElementById('birth_country')

  useEffect(() => {
    countriesSelect = document.getElementById('birth_country')
    citiesSelect = document.getElementById('birth_city')
    buildCountrieOptions()
  }, []);

  const  buildOption = (value) => {
    const option = document.createElement('option')
    option.setAttribute('value', value)
    option.appendChild(document.createTextNode(value))
    return option
  }
  const buildCountrieOptions = () =>{
    Object.keys(COUNTRIES).forEach(function (countrie) {
        const option = buildOption(countrie)
        countriesSelect = document.getElementById('birth_country')
        countriesSelect.addEventListener('change', onCountriesChangeEventHandler)
        countriesSelect.appendChild(option)
    })
  }

  const onCountriesChangeEventHandler = (event) => {
   
    // Retire tout les éléments option
    citiesSelect.innerHTML = null
    // eslint-disable-next-line no-undef
    COUNTRIES[event.target.value].forEach(function (city) {
        const option = buildOption(city)
        citiesSelect.appendChild(option)
    })
}

  return (
    <div className="d-flex flex-column align-items-center" >
      <h2>Date and place of birth, marital status</h2>
      <Form.Group className="w-100 m-2">
        <div className="row">
        <div className="col-6">
            <Form.Control
                placeholder="Birth Country"
                as="select"
                name="birth_country"
                id="birth_country"
                className="w-100 mt-2"
                onChange={handleChange("birth_country")}
              >
            </Form.Control>
          </div>
          <div className="col-6">
          <Form.Control
                placeholder="Birth City"
                as="select"
                name="birth_city"
                id="birth_city"
                className="w-100 mt-2"
                onChange={handleChange("birth_city")}
              >
            </Form.Control>
           
          </div>
        </div>
      </Form.Group>
      <Form.Group className="w-100 m-2">
        <div className="row">
         
          <div className="col-6">
            <Form.Control
                placeholder="Birth Place"
                type="text"
                name="birth_place"
                id="birth_place"
                className="w-100 mt-2"
                onChange={handleChange("birth_place")}
              >
            </Form.Control>
          </div>
          <div className="col-6">
          <Form.Control
                placeholder="Phone Number"
                onChange= {handleChange("phone_number")}
                name="phone_number"
                value={client.phone_number}
              />
          </div>
        </div>
     </Form.Group>
     <Form.Group className="w-100 m-2">
        <div className="row">
          <div className="col-6">
            <Form.Control
                placeholder="Marital status"
                className="mt-2"
                as="select"
                sm="7"
                onChange= {handleChange("marital_status")}
                name="marital_status"
                id="marital_status"
              >
                <option value="0">Never Married</option>
                <option  value="1">Maried</option>
                <option  value="2">Divorced</option>
            </Form.Control>
          </div>
        
        
        </div>
      </Form.Group>
      {formValues && formValues.map((obj, index) => (
          <Input
            key={index}
            objValue={obj}
            onChange={handleInputChange}
            index={index}
            deleteField={handleDeleteField}
          />
        ))}
        {
          toogle && (
          <Form.Group className="w-100 m-2">
            <div className="row">
              <div className="col-4">
                <input type="text" placeholder="label" ref={inputRef} className="form-control " />
              </div>
              <div className="col-4">
              <select ref={selectRef}  className="form-control ">
              <option value="" disabled selected hidden>Choose the type</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
              </select>
              </div>
              <div className="col-4">
              <button className="btn btn-secondary" onClick={handleAddField}>
                Add
              </button>
              </div>
            </div>
          </Form.Group>
          )
        }
    </div>
  );
};

export default ContactInfo;

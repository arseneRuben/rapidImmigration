import React, {useEffect} from "react";
import {Form} from "react-bootstrap";
import { COUNTRIES } from "../../../js/frontend/country/countries";

const ContactInfo = ({ handleChange }) => {
  let citiesSelect = document.getElementById('birth_place')
  let countriesSelect = document.getElementById('birth_country')

  useEffect(() => {
    countriesSelect = document.getElementById('birth_country')
    citiesSelect = document.getElementById('birth_place')
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
    <div className="d-flex flex-column align-items-center">
      <h2>Identity Info</h2>
      <div className="row">
        <div className="col-6">
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("email")}
          name="email"
        />
      </Form.Group>
      </div>
      <div className="col-6">
      <Form.Group className="w-100 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
          name="phone_number"
        />
      </Form.Group>
      </div>
      </div>
      <Form.Group className="w-100 m-3">
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
              name="birth_place"
              id="birth_place"
              className="w-100 mt-2"
              onChange={handleChange("birth_place")}
            >
          </Form.Control>
        </div>
      </div>
     </Form.Group>
     <div className="row">
        <div className="col-6">
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="Passport Number"
          onChange={handleChange("passport_number")}
          name="passport_number"
        />
      </Form.Group>
      </div>
      <div className="col-6">
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="Spouse Name"
          onChange={handleChange("spouse_name")}
          name="spouse_name"
        />
      </Form.Group>
      </div>
      </div>
      
    
    </div>
  );
};

export default ContactInfo;

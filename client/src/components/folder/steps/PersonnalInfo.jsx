import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { COUNTRIES } from "../../../js/frontend/country/countries";


const PersonnalInfo = ({ handleChange }) => {
  let citiesSelect = document.getElementById('birth_city')
  const outputDiv = document.getElementById('output')
  
  const [countries, setCountries] = useState([]);
  let countriesSelect = document.getElementById('birth_country')
  //citiesSelect.addEventListener('change', onCityChangeEventHandler)
  useEffect(() => {
    setCountries(true);
    countriesSelect = document.getElementById('birth_country')
    citiesSelect = document.getElementById('birth_city')
    buildCountrieOptions()
  }, []);

  
  

  
 /* const  onCityChangeEventHandler = (event) => {
    outputDiv.innerHTML = event.target.value
  } */


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
      <h2>Personal Info</h2>
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="First Name"
          onChange={handleChange("first_name")}
          name="first_name"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("last_name")}
          name="last_name"
        />
      </Form.Group>
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group>
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="Birth Date"
          onChange={handleChange("birth_date")}
          name="birth_date"
        />  
      </Form.Group>
      <Form.Group className="w-100 m-3">
      <Form.Control
          placeholder="Birth Country"
          as="select"
          name="birth_country"
          id="birth_country"
          className="w-100 mt-2"
          onChange={handleChange("birth_country")}
        >
      </Form.Control>
      <Form.Control
          placeholder="Birth City"
          as="select"
          name="birth_city"
          id="birth_city"
          className="w-100 mt-2"
          onChange={handleChange("birth_city")}
        >
      </Form.Control>
       
    </Form.Group>
                 
      <Form.Group className="w-100 mt-2">
        <Form.Control
          placeholder="Passport Number"
          onChange={handleChange("passport_number")}
          name="passport_number"
        />
      </Form.Group>
    
     
    </div>
  );
};

export default PersonnalInfo;

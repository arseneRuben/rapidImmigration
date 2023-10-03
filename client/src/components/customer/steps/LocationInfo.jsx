import React, {useEffect} from "react";
import { Form } from "react-bootstrap";
import { COUNTRIES } from "../../../js/frontend/country/countries";
import Input from "./Input";


const LocationInfo = ({ handleChange, client , formValues, toogle, inputRef, selectRef, handleAddField, handleDeleteField, handleInputChange}) => {
  let citiesSelect = document.getElementById('city')
  
  let countriesSelect = document.getElementById('country')

  useEffect(() => {
    countriesSelect = document.getElementById('country')
    citiesSelect = document.getElementById('city')
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
        countriesSelect = document.getElementById('country')
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
    <div className="d-flex flex-column align-items-center" id="location-info">
      <h2>Location Info</h2>
      <Form.Group className="w-100 m-3">
      <div className="row">
        <div className="col-6">
          <Form.Control
              placeholder=" Country"
              as="select"
              name="country"
              id="country"
              className="w-100 mt-2"
              onChange={handleChange("country")}
              value={ client.country }
            >
          </Form.Control>
        </div>
        <div className="col-6">
          <Form.Control
              placeholder="City"
              as="select"
              name="city"
              id="city"
              className="w-100 mt-2"
              onChange={handleChange("city")}
              value={ client.city }
            >
          </Form.Control>
        </div>
      </div>
     </Form.Group>

      <Form.Group className="w-100 mt-4">
      <div className="row">
        <div className="col-6">
          <Form.Control
            placeholder="Street"
            onChange={handleChange("street")}
            name="street"
            value={ client.street }
          />
        </div>
        <div className="col-6">
          <Form.Control
            placeholder="Zip Code"
            onChange={handleChange("zip_code")}
            name="zip_code"
            value={ client.zip_code }
          />
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

export default LocationInfo;

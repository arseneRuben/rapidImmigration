import React from "react";
import { Form } from "react-bootstrap";
import Input from "./Input";


const PersonnalInfo = ({ handleChange, user=null, register, formValues, toogle, inputRef, selectRef, handleAddField, handleDeleteField, handleInputChange}) => {
  
  return (
      <div className="d-flex flex-column align-items-center" id="personnal-info">
        <Form.Group className="w-100 mt-2">
          <div className="row">
            <div className="col-6">
                <Form.Control
                  placeholder="First Name"
                  onChange= {handleChange("first_name")}
                  name="first_name"
                  value={user ? user.first_name : ""}
                  id="first_name"
                  autoComplete="off"
                />
            </div>
            <div className="col-6">
                <Form.Control
                  placeholder="Last Name"
                  onChange= {handleChange("last_name")}
                  name="last_name"
                  value={user ? user.last_name:""}
                  id="last_name"
                  autoComplete="off"
                />
            </div>

          </div>
        </Form.Group>
        <Form.Group  className="w-100 mt-2">
          <div className="row">
            <div className="col-6">
              <Form.Label htmlFor="gender" className="w-100 mt-2">Gender</Form.Label>
            </div>
            <div className="col-6">
              <Form.Control
                placeholder="Gender"
                className="w-100 mt-2"
                as="select"
                sm="7"
                onChange= {handleChange("gender")}
                name="gender"
                id="gender"
                value={user ? user.gender: "0"}

              >
                <option value="0">Male</option>
                <option   value="1">Female</option>
                <option  value="2">Other</option>
              </Form.Control>
            </div>
          </div>
        </Form.Group>
        <Form.Group className="w-100 mt-2">
              <div className="row">
                <div className="col-6">
                  <Form.Label htmlFor="birth_date"  sm="5">Birthday</Form.Label>
                  </div>
                  <div className="col-6">
                    <Form.Control
                      placeholder="Birth Date"
                      onChange= {handleChange("birth_date")}
                      name="birth_date"
                      id="birth_date"
                      type="date"
                      value={user ? user.birth_date: ""}
                      autoComplete="on"
                    /> 
                    </div> 
                </div>
        </Form.Group>
              <input type="hidden" name="email"  value={user ? user.email: ""}/>
        <Form.Group className="w-100 mt-2">
              <div className="row">
                <div className="col-6">
                <Form.Control
                      placeholder="Email"
                      onChange= {handleChange("email")}
                      name="email"
                      id="email"
                      type="email"
                      value={user ? user.email: ""}
                    /> 
                  </div>
                  <div className="col-6">
                    <Form.Control
                      placeholder={user.hasOwnProperty("password") ? "Password": "Passport Number"}
                      onChange= {user.hasOwnProperty("password") ? handleChange("password") :  handleChange("passport_number") }
                      name={user.hasOwnProperty("password") ? "password": "passport_number"}
                      id={user.hasOwnProperty("password") ? "password": "passport_number"}
                      type={user.hasOwnProperty("password") ? "password": "text"}
                      value={user.hasOwnProperty("password") ? user.password: user.passport_number}
                    /> 
                  </div> 
                </div>
        </Form.Group>
        <Form.Group className="w-100 m-2">
          <div className="row">
            <div className="col-3">
              <Form.Label htmlFor="profile_image">Profil image</Form.Label>
            </div>
            <div className="col-9">
              <Form.Control
                type="file"
                accept="image/*"
                onChange= {handleChange("profile_image")}
                {...register("profile_image")}
                name="profile_image"
                id="profile_image"
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

export default PersonnalInfo;

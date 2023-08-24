import React, {useState} from "react";
import { Form , Row} from "react-bootstrap";
import { useLocation } from "react-router-dom";


 

const PersonnalInfo = ({ handleChange, personnalInfoData }) => {
  const location = useLocation();
 
  
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="row">
        <div className="col-6">
          <Form.Group className="w-100 mt-2">
            <Form.Control
              placeholder="First Name"
              onChange={handleChange("first_name")}
              name="first_name"
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group className="w-100 mt-2 col-6">
            <Form.Control
              placeholder="Last Name"
              onChange={handleChange("last_name")}
              name="last_name"
            />
          </Form.Group>
        </div>
      </div>
      
         
      <Form.Group  className="w-100 mt-2">
        <div className="row">
          <div className="col-6">
            <Form.Label className="w-100 mt-2">Gender</Form.Label>
          </div>
          <div className="col-6">
            <Form.Control
              placeholder="Gender"
              className="w-100 mt-2"
              as="select"
              sm="7"
              onChange={handleChange("gender")}
              name="gender"
            >
              <option value="0">Male</option>
              <option value="1">Female</option>
              <option value="2">Other</option>
            </Form.Control>
          </div>
        </div>
      </Form.Group>
          
        
        
        
          <Form.Group className="w-100 mt-2">
            <div className="row">
               <div className="col-6">
                <Form.Label  sm="5">Birthday</Form.Label>
                </div>
                <div className="col-6">
                  <Form.Control
                    placeholder="Birth Date"
                    onChange={handleChange("birth_date")}
                    name="birth_date"
                    type="date"
                  /> 
                   </div> 
                </div>
                </Form.Group>
            
               
      
      <div className="row">
        <div className="col-6">
          <Form.Group className="w-100 mt-2">
            <Form.Control
              placeholder="Email"
              onChange={handleChange("email")}
              name="email"
              type="email"
            />
          </Form.Group>
        </div>
        <div className="col-6">
          <Form.Group className="w-100 mt-2 col-6">
            <Form.Control
              placeholder="Password"
              onChange={handleChange("password")}
              name="password"
              type="password"
            />
          </Form.Group>
        </div>
      </div>
      <Form.Group className="w-100 m-2">
        <div className="row">
          <div className="col-3">
            <Form.Label>Profil image</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              type='file'
              onChange={handleChange("profile_image")}
              name="profile_image"
            />
          </div>
        </div>
      </Form.Group>
    </div>
  );
};

export default PersonnalInfo;

import React, {useState} from "react";
import { Form } from "react-bootstrap";


const PersonnalInfo = ({ handleChange, user=null }) => {
  return (
     
     <div className="d-flex flex-column align-items-center">
      <Form.Group className="w-100 mt-2">
        <div className="row">
          <div className="col-6">
              <Form.Control
                placeholder="First Name"
                onChange= {handleChange("first_name")}
                name="first_name"
                value={user ? user.first_name : ""}
                id="first_name"
                autoComplete="on"
              />
          </div>
          <div className="col-6">
              <Form.Control
                placeholder="Last Name"
                onChange= {handleChange("last_name")}
                name="last_name"
                value={user ? user.last_name:""}
                id="last_name"
                autoComplete="on"
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
                    placeholder={user ? user.email: ""}
                    disabled
                  /> 
                </div>
                <div className="col-6">
                  <Form.Control
                    placeholder="Password"
                    onChange= {handleChange("password")}
                    name="password"
                    id="password"
                    type="password"
                    value={user ? user.password: ""}
                    autoComplete="on"
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
              type='file'
              accept="image/*"
              onChange= {handleChange("profile_image")}
              name="profile_image"
              id="profile_image"
            />
          </div>
        </div>
      </Form.Group>
    </div>
  );
};

export default PersonnalInfo;

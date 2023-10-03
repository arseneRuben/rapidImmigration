import React from 'react'
import { Form } from "react-bootstrap";
import Input from "./Input";


const FilesInfo = ({ client,handleChange,register, formValues, toogle, inputRef, selectRef, handleAddField, handleDeleteField, handleInputChange }) => {
  return (
    <div className="d-flex flex-column justify-content-around" id="files-info">
      <h2 className='text-center m-2'>File Info</h2>
      <Form.Group className="w-100 m-2">
        <div className="row">
          <div className="col-3">
            <Form.Label>Passport</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              type='file'
              onChange={handleChange("passport")}
              {...register("passport")}
              name="passport"
            />
          </div>
        </div>
      </Form.Group>
      <Form.Group className="w-100 m-2">
        <div className="row">
          <div className="col-3">
            <Form.Label>Birth certificate</Form.Label>
          </div>
          <div className="col-9">
            <Form.Control
              type='file'
              onChange={handleChange("birth_certificate")}
              name="birth_certificate"
              {...register("birth_certificate")}
            />
          </div>
        </div>
      </Form.Group>
      <Form.Group className="w-100 m-2">
      <div className="row">
          <div className="col-3">
              <Form.Label>Marriage certificate</Form.Label>
            </div>
            <div className="col-9">
              <Form.Control
                type='file'
                onChange={handleChange("marriage_certificate")}
                name="marriage_certificate"
                {...register("marriage_certificate")}
              />
          </div>
      </div>
      </Form.Group>
    

      <Form.Group className="w-100 m-2">
      <div className="row">
        <div className="col-3">
         <Form.Label>Resume</Form.Label>
        </div>
        <div className="col-9">
            <Form.Control
              type='file'
              onChange={handleChange("resume")}
              name="resume"
              {...register("resume")}
            />
         </div>
        </div>
      </Form.Group>
      <Form.Group className="w-100 m-2">
      <div className="row">
        <div className="col-3">
        <Form.Label>Rapport WES</Form.Label>
        </div>
        <div className="col-9">
        <Form.Control
          type='file'
          onChange={handleChange("wes_report")}
          name="wes_report"
          {...register("wes_report")}
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
                <option value="file">File</option>
             
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
  )
}

export default FilesInfo
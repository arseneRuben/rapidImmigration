import React from 'react'
import { Form } from "react-bootstrap";

const FilesInfo = ({ client,handleChange,register }) => {
  return (
    <div className="d-flex flex-column justify-content-around">
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
      <Form.Group className="w-100 m-2">
      
      </Form.Group>
    </div>
  )
}

export default FilesInfo
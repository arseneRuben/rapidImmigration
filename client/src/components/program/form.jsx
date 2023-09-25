import React from 'react'

import { Form } from "react-bootstrap";
import { CITIZENSHIP_APPLICATION, EXPRESS_ENTRY, FAMILY_SPONSORSHIP, PERMANENT_RESIDENCE, PROVINCIAL_NOMINEE, SKILLED_WORKER, STUDY_PERMIT, VISITOR_PERMIT, WORK_PERMIT } from "../../constants/programTypes";


const ProgramForm = ({datas=null,handleChange, handleSave}) => {
  return (
    <form  className='w-100' onSubmit={handleSave}>
    <div className="row">
        <div className="col-6">
          <Form.Control
              placeholder="Program Name"
              name="name"
              id="name"
              className="w-100 mt-2"
              onChange={handleChange("name")}
              value={datas.name}
            >
          </Form.Control>
        </div>
        <div className="col-6">
          <Form.Control
                placeholder="Description"
                onChange= {handleChange("description")}
                name="description"
                as="textarea"
                value={datas.description}
              />
        </div>
    </div>
    <div className="row m-2 ">
      <div className="col-6 w-50">
        <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              placeholder="Program's Type"
              onChange={handleChange("type")}
              name="type"
              as="select"
              value={datas.type}
            >
              <option value="">Select Type</option>
              <option value={WORK_PERMIT}>Work Permit</option>
              <option value={STUDY_PERMIT}>Study Permit</option>
              <option value={VISITOR_PERMIT}>Visitor Permit</option>
              <option value={PERMANENT_RESIDENCE}>Permanent Residence</option>
              <option value={CITIZENSHIP_APPLICATION}>Citizenship</option>
              <option value={EXPRESS_ENTRY}>Espress Entry</option>
              <option value={PROVINCIAL_NOMINEE}>Provincial Nominee</option>
              <option value={SKILLED_WORKER}>Skilled Worker</option>
              <option value={FAMILY_SPONSORSHIP}>Family Sponsorhip</option>
            </Form.Control>
        </Form.Group>
      </div>
      <div className="col-6 w-50 ">
        <button className="btn btn-primary btn-lg m-4" >
              Submit
          </button>
      </div>
     
    </div>
  </form>
  )
}

export default ProgramForm
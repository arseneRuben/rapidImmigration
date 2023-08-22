import React from 'react'
import { Form } from "react-bootstrap";

const FilesInfo = ({ handleChange }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2>File Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Passport"
          onChange={handleChange("passport")}
          name="passeport"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Birth certificate"
          onChange={handleChange("birth_certificate")}
          name="birth_certificate"
        />
      </Form.Group>
    </div>
  )
}

export default FilesInfo
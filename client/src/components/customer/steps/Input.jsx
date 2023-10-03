import React from "react";
import { Form } from "react-bootstrap";

export default function Input({ objValue, onChange, index, deleteField }) {
  const { label, type, value } = objValue;
  return (
    <Form.Group className="w-100 mt-2">
        <div className="row">
            <div className="col-5"> <Form.Label htmlFor={label} className="w-100 mt-2">{label}</Form.Label></div>
            <div className="col-6">
                <Form.Control
                      onChange={(e) => onChange(e, index)}
                      name={label}
                      id={label}
                      type={type}
                      value={value || ""}
                 /> 
            </div>
            <div onClick={(e) => deleteField(e, index)} className="col-1 bg-danger text-white p-2">
                X
            </div>
        </div>
    </Form.Group>
  );
}
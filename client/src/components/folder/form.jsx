import React from 'react'
import { Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const FolderForm = ({datas=null,handleChange, handleSave}) => {

    const {isLoadingC, customers} = useSelector((state)=> state.customers)
    const {isLoadingP, programs} = useSelector((state)=> state.programs)

    return (
      <form  className='w-100' onSubmit={handleSave}>
       <div className="row m-2 ">
        <div className="col-6 w-50">
          <Form.Group controlId="type">
              <Form.Label>Program</Form.Label>
              <Form.Control
                onChange={handleChange("programId")}
                name="programId"
                as="select"
                value={datas.programId}
              >
                <option value="">Select Program</option>
                {programs.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                    {prog.name}
                  </option>
                ))
                }
               
              </Form.Control>
          </Form.Group>
        </div>
        <div className="col-6 w-50 ">
            <Form.Group controlId="type">
              <Form.Label>Client</Form.Label>
              <Form.Control
                onChange={handleChange("customerId")}
                name="customerId"
                as="select"
                value={datas.type}
              >
                <option value="">Select Client</option>
                {customers.map((customer) => (
                    <option key={customer.id} value={customer.id}>
                    {customer.first_name + " " + customer.last_name}
                  </option>
                ))
                }
               
              </Form.Control>
          </Form.Group>
        </div>
      </div>
      <div className="row m-2 ">
        <div className="col-6">
        <Form.Control
              rows="5" 
              placeholder="Please write your notes"
              name="comments"
              id="comments"
              as="textarea"
              className="w-100 mt-2"
              onChange={handleChange("comments")}
              value={datas.comments}
            >
          </Form.Control>
        </div>
        <div className="col-6">
            <Form.Group>
                <Form.Label>Folder number : <strong>{datas.folderNumber}</strong></Form.Label>
            
                 <button className="btn btn-primary btn-lg m-3" >
                    Submit
                </button>
            </Form.Group>
        </div>
      </div>
    </form>
    )
  }

export default FolderForm
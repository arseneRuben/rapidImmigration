import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { message } from 'antd';
import { useDispatch , useSelector} from 'react-redux';
import PageWrapper from "../../components/pageWrapper";
import { createProgram } from "../../api";
import { Form } from "react-bootstrap";


const NewProgram = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [datas, setDatas] = useState({
    name: "",
    description: "",
    image: "",
  });


  // Set PersonalInfo datas
  const onSubmit = async (data, event) =>  {
    const formData = new FormData();
    if(data.image.length > 0){
      formData.append("image", data.image[0]);
      datas["image"]= data.image[0].name;
    }
   
    handleSave(event)
    const res = await fetch("http://localhost:8080/upload-file", {
        method: "POST",
        body: formData,
    }).then((res) => res.json());
    message.success(JSON.stringify(`${res.message}, status: ${res.status}`)); 
  
};

const handleSave = async (event) => {
  event.preventDefault()
  dispatch(createProgram(datas, navigate))
}
const handleChange = (name) => (e) => {
    setDatas({ ...datas, [name]: e.target.value });
};
  return (
    <PageWrapper>
       <div class="panel-heading text-center h3">
                                      New Immigration Program
                                </div>
     
      <form  className='w-100' onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
            <div className="col-6">
              <Form.Control
                  placeholder="Program Name"
                  name="name"
                  id="name"
                  className="w-100 mt-2"
                  onChange={handleChange("name")}
                >
              </Form.Control>
            </div>
            <div className="col-6">
              <Form.Control
                    placeholder="Description"
                    onChange= {handleChange("description")}
                    name="description"
                    as="textarea"
                  />
            </div>
        </div>
        <div className="row m-2 ">
          <div className="col-9 w-75">
            <Form.Group className=" ">
            
                <Form.Label>Image</Form.Label>
            
                
                <Form.Control
                  type='file'
                  onChange={handleChange("image")}
                  name="image"
                  {...register("image")}
                />
            </Form.Group>
          </div>
          <div className="col-3 w-25 ">
            <button className="btn btn-primary btn-lg " >
                  Submit
              </button>
          </div>
         
        </div>
      </form>
     
    </PageWrapper>
  )
}

export default NewProgram
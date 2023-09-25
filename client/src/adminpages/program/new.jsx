import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import PageWrapper from "../../components/pageWrapper";
import { createProgram } from "../../actions/program";
import ProgramForm from "../../components/program/form";


const NewProgram = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [datas, setDatas] = useState({
    name: "",
    description: "",
    type: "",
  });

const handleSave = async (event) => {
  event.preventDefault()
  const res = await dispatch(createProgram(datas, navigate))
}
const handleChange = (name) => (e) => {
    setDatas({ ...datas, [name]: e.target.value });
};
  return (
    <PageWrapper>
      <div className="panel-heading text-center h3">
                                      New Immigration Program
      </div>
      <ProgramForm datas={datas}  handleChange={handleChange} handleSave={handleSave} />
    </PageWrapper>
  )
}

export default NewProgram
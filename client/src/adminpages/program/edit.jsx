import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PageWrapper from '../../components/pageWrapper';
import ProgramForm from "../../components/program/form";
import { updateProgram } from "../../actions/program";


const ProgramEdit = () => {
  const { id } = useParams()
  const {isLoading, programs} = useSelector((state)=> state.programs)
  const program = programs.find((prog) => prog.id === parseInt(id))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const [datas, setDatas] = useState({
      id : program.id,
      name: program.name,
      description: program.description,
      type: program.type,
    })

  const handleSave = async (event) => {
    event.preventDefault()
    const res = await dispatch(updateProgram(datas,  navigate))
  }
  const handleChange = (name) => (e) => {
    setDatas({ ...datas, [name]: e.target.value });
  };
  
  return (
   
    <PageWrapper>
      <div className="panel-heading text-center h3">
                Edit Immigration Program
      </div>
      <ProgramForm datas={datas}  handleChange={handleChange} handleSave={handleSave} />
    </PageWrapper>

  )
}

export default ProgramEdit
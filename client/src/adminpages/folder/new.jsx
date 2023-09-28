import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import PageWrapper from "../../components/pageWrapper";
import { createProgram } from "../../actions/program";
import FolderForm from "../../components/folder/form";
import { createFolder } from "../../actions/folder";


const NewFolder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.user)

  const [datas, setDatas] = useState({
    customerId: "",
    programId: "",
    consultantId: "",
    comments: "",
    consultantId: user.id,
    folderNumber: uuidv4().substring(1, 13),
  });

const handleSave = async (event) => {
  event.preventDefault()
  dispatch(createFolder(datas, navigate))
}
const handleChange = (name) => (e) => {
    setDatas({ ...datas, [name]: e.target.value });
};
  return (
    <PageWrapper>
      <div className="panel-heading text-center h3">
                                      New Customer's Folder
      </div>
      <FolderForm datas={datas}  handleChange={handleChange} handleSave={handleSave} />
    </PageWrapper>
  )
}

export default NewFolder
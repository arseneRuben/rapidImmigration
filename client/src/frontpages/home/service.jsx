import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpinnerCustom from '../../redux/SpinnerCustom'
import { iconsMap } from '../../constants/programTypes'
import FrontPages from '..';
import { createQuote } from "../../api";
import { hideLoading, showLoading } from '../../redux/features/alertSlice'

const Services = () => {
  const {isLoading, programs} = useSelector((state)=> state.programs)
  const dispatch = useDispatch()
  const [datas, setDatas] = useState({
    full_name: "",
    programId: "",
    phone_number: "",
    email:""
  });
  const handleSubmit =  async(event) =>  {
    event.preventDefault()
    dispatch(showLoading())
    await createQuote(datas)
    dispatch(hideLoading())
  }
  const handleChange = (name) => (e) => {
    setDatas({ ...datas, [name]: e.target.value });
};
   
  return (
    <FrontPages >

        <div className="container-fluid pt-6 px-5">
            <div className="text-center mx-auto mb-5" >
                <h1 className="display-5 mb-0">Quels services offrons-nous?</h1>
                <hr className="w-25 mx-auto bg-primary"/>
            </div>

            <div className="row g-5">
            {isLoading ? <SpinnerCustom /> : programs.map((program)=> (
                <div className="col-lg-4 col-md-6">
                    <div className="service-item  bg-secondary bg-gradient text-white  text-center px-5">
                        <div className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4" >
                        
                        <FontAwesomeIcon icon={iconsMap({label: program.type})} size="5x"  />
                        </div>
                        <h3 className="mb-3">{program.name}</h3>
                        <p className="mb-2">{program.description}</p>
                    </div>
                </div>
            ))
            }
            </div>
            
        </div>
        <div className="container-fluid ">
            <div className="row g-0">
                <div className="col-lg-7 py-6 px-5">
                    <h1 className="display-5 mb-4">Prise de rendez-vous</h1>
                    <p className="mb-4">Chacun est encourage a prendre un rendez-vous avec un consultant  afin d' etudier le projet d'immigration. N'hesitez pas!</p>
                    <form  className='w-100'  id="quote" onSubmit={handleSubmit}>
                        <div className="row gx-3">
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" name="full_name" className="form-control" id="form-floating-1" placeholder="John Doe"    onChange={handleChange("full_name")} value={datas.full_name}/>
                                    <label for="form-floating-1">Full Name</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <input className="form-control" id="form-floating-2" type="tel" name="phone_number" placeholder="+237 ... ..."  onChange={handleChange("phone_number")} value={datas.phone_number}/>
                                    <label for="form-floating-2">Phone number</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <input type="email" name="email" className="form-control" id="form-floating-2" placeholder="name@example.com" onChange={handleChange("email")} value={datas.email}/>
                                    <label for="form-floating-2">Email address</label>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-3">
                            <div className="col-6">
                                <div className="form-floating">
                                    <select className="form-select" name="programId" id="floatingSelect" aria-label="Express Entry" onChange={handleChange("programId")} value={datas.programId}>
                                    {isLoading ? <SpinnerCustom /> : programs.map((program)=> (
                                        <option value={program.id} >{program.name}</option>
                                         ))
                                    }
                                       
                                    </select>
                                    <label for="floatingSelect">Select A Service</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-danger w-100 h-100" type="submit">Request A Quote</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-5" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/quote.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    </FrontPages>

  )
}

export default Services
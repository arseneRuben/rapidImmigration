import React from 'react'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SpinnerCustom from '../../redux/SpinnerCustom'
import { iconsMap } from '../../constants/programTypes'
import FrontPages from '..';

const Services = () => {
    const {isLoading, programs} = useSelector((state)=> state.programs)

  return (
    <FrontPages >

        <div className="container-fluid pt-6 px-5">
            <div className="text-center mx-auto mb-5" >
                <h1 className="display-5 mb-0">What We Offer</h1>
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
                    <h1 className="display-5 mb-4">Request A  Quote</h1>
                    <p className="mb-4">Kasd vero erat ea amet justo no stet, et elitr no dolore no elitr sea kasd et dolor diam tempor. Nonumy sed dolore no eirmod sit nonumy vero lorem amet stet diam at. Ea at lorem sed et, lorem et rebum ut eirmod gubergren, dolor ea duo diam justo dolor diam ipsum dolore stet stet elitr ut. Ipsum amet labore lorem lorem diam magna sea, eos sed dolore elitr.</p>
                    <form  className='w-100'  id="quote">
                        <div className="row gx-3">
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="form-floating-1" placeholder="John Doe"/>
                                    <label for="form-floating-1">Full Name</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="form-floating-2" placeholder="name@example.com"/>
                                    <label for="form-floating-2">Email address</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <select className="form-select" id="floatingSelect" aria-label="Financial Consultancy">
                                    {isLoading ? <SpinnerCustom /> : programs.map((program)=> (
                                        <option >{program.name}</option>
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
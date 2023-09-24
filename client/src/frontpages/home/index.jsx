import React from 'react'
import { useSelector } from 'react-redux'
import FrontPages from '..'
import { Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap, faPlane, faStreetView, faTrophy } from '@fortawesome/free-solid-svg-icons'
import SpinnerCustom from '../../redux/SpinnerCustom'

const HomePage = () => {
    const {isLoading, programs} = useSelector((state)=> state.programs)
    function icons({ label  }) {
        switch(label) {
          case 'Permis d\'etudes':
            return faGraduationCap
          case 'Permis de travail':
            return faBriefcase
          case 'Permis visiteur':
            return faStreetView
          case 'Entree Express':
                return faTrophy
            default:
                return faPlane
          
        }
    }
  return (
    <>
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
                     
                       <FontAwesomeIcon icon={icons({label: program.name})} size="5x"  />
                    </div>
                    <h3 className="mb-3">{program.name}</h3>
                    <p className="mb-2">{program.description}</p>
                </div>
            </div>
           ))
        }
        </div>
    </div>
    </FrontPages>
    </>
  )
}

export default HomePage
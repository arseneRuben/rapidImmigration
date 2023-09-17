import React from 'react'
import IdentityReport from '../reports/IdentityReport'
import ContactReport from '../reports/ContactReport'
import FileReport from '../reports/FileReport'
import MaritalReport from '../reports/MaritalReport'

const Summary = ({client}) => {

   
  return (
    <div className="d-flex flex-column align-items-center">
        <div className="card text-white bg-secondary my-5 py-4 text-center">
            <div className="card-head h3">Contents of the new client  </div>
            <div className="card-body row gx-4 gx-lg-5">
                        <div className="col-md-6 mb-5">
                              <IdentityReport client={client}/>
                        </div>
                        <div className="col-md-6 mb-5">
                                <ContactReport client={client}/>
                        </div>
                       
            </div>
            <div className="card-body row gx-4 gx-lg-5">
            `   <div className="col-md-8 mb-5">
                           <FileReport client={client}/>
                </div>
                <div className="col-md-4 mb-5">
                            <MaritalReport client={client}/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Summary
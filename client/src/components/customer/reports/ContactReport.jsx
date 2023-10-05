import { faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { faMapLocation, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ContactReport = ({client}) => {
  return (
    <div className="card text-white bg-secondary m-2 p-2 text-center">
    <div className=" d-flex flex-column justify-content-start">
        <h4 className="card-title  card-head">Contact-Adresse</h4>
       
        <ul class="list-group ">
         
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Tel</div>
              {client.phone_number}
            </div>
            <span class="badge bg-primary rounded-pill"><FontAwesomeIcon icon={faPhone} /></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Email</div>
              {client.email}
            </div>
            <span class="badge bg-primary rounded-pill"><FontAwesomeIcon icon={faMailchimp} /></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Localisation</div>
              {client.country} / {client.city}/ {client.street}
            </div>
            <span class="badge bg-primary rounded-pill"><FontAwesomeIcon icon={faMapLocation} /></span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Adresse</div>
              {client.address} / {client.zip_code}
            </div>
            <span class="badge bg-primary rounded-pill"><FontAwesomeIcon icon={faMapLocationDot} /></span>
          </li>
        </ul>
    </div>
</div>
  )
}

export default ContactReport
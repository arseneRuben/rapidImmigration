import React from 'react'

const ContactReport = ({client}) => {
  return (
    <div className="card h-100">
    <div className="card-body">
        <h4 className="card-title">Contact-Adresse</h4>
        <p className="card-text">Tel : {client.phone_number}</p>
        <p className="card-text">Email :   {client.email} </p>
        <p className="card-text">Localisation :  {client.country} / {client.city}/ {client.street}</p>
        <p className="card-text">Adresse :  {client.address} / {client.zip_code}</p>
    </div>
</div>
  )
}

export default ContactReport
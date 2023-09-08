import React from 'react'

const Summary = ({client}) => {
    function gender({ label  }) {
        switch(label) {
          case '0':
            return "HOMME"
          case '1':
            return "FEMME"
          case '2':
            return "AUTRE"
          
        }
    }
    function matitalStatus({ label  }) {
        switch(label) {
          case '0':
            return "NEVER MARRIED"
          case '1':
            return "MARRIED"
          case '2':
            return "DIVORCED"
          
        }
    }
  return (
    <div className="d-flex flex-column align-items-center">
        <div class="card text-white bg-secondary my-5 py-4 text-center">
            <div class="card-head h3">Contents of the new client  </div>
            <div class="card-body row gx-4 gx-lg-5">
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">Identite</h4>
                                    <p class="card-text">{client.first_name}  {client.last_name}</p>
                                    <p class="card-text">Ne le   {client.birth_date} a {client.birth_country}-{client.birth_city}-{client.birth_place}</p>
                                    <p class="card-text">Sexe  {gender(client.gender)} </p>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">Contact-Adresse</h4>
                                    <p class="card-text">Tel : {client.phone_number}</p>
                                    <p class="card-text">Email :   {client.email} </p>
                                    <p class="card-text">Localisation :  {client.country} / {client.city}/ {client.street}</p>
                                    <p class="card-text">Adresse :  {client.address} / {client.zip_code}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">Married life</h4>
                                    <p class="card-text">Marital status : {matitalStatus(client.marital_status)}</p>
                                    <p class="card-text">Spouse : {client.spouse_name}</p>
                                </div>
                            </div>
                        </div>
            </div>
            <div class="card-body row gx-4 gx-lg-5">
            `   <div class="col-md-6 mb-5">
                            <div class="card h-100">
                                <div class="card-body">
                                    <h4 class="card-title">Documents</h4>
                                    <p class="card-text">Passport : {client.passport}</p>
                                    <p class="card-text">Birth certificate : {client.birth_certificate}</p>
                                    <p class="card-text">Resume : {client.resume}</p>
                                    <p class="card-text">WES Report : {client.wes_report}</p>
                                    <p class="card-text">Marriage certificate : {client.marriage_certificate}</p>
                                    <p class="card-text">Photo : {client.profile_image}</p>
                                    <p class="card-text">Others : {client.other_documents}</p>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Summary
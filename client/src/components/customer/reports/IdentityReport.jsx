import React from 'react'

const IdentityReport = ({client}) => {
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
  return (
                           <div className="card text-white bg-secondary m-2 p-2 text-center">
                                  <h4 className="card-title card-head">Identite</h4>
                                  <p className="card-text">{client.first_name}  {client.last_name}</p>
                                  <p className="card-text">Ne le   {client.birth_date} a {client.birth_country}-{client.birth_city}-{client.birth_place}</p>
                                  <p className="card-text">Sexe  {gender(client.gender)} </p>
                              </div>
  )
}

export default IdentityReport
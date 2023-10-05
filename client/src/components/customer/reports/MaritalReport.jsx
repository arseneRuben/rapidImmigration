import React from 'react'

const MaritalReport = ({client}) => {
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
       <div className="card text-white bg-secondary m-2 p-2 text-center">
            <h4 className="card-title  card-head">Married life</h4>
            <p className="card-text">Marital status : {matitalStatus(client.marital_status)}</p>
            <p className="card-text">Spouse : {client.spouse_name}</p>
            <p className="card-text">  {client.chidren} child(ren)</p>
        </div>  )
}

export default MaritalReport
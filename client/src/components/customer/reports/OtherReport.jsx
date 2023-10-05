import React from 'react'

const OtherReport = ({others}) => {
  return (
   <div className="card text-white bg-secondary my-5 py-4 text-center">
        <h4 className="card-title  card-head">Autres informations</h4>
        {
            others.map((other, index) => {
                return (
                    <p className="card-text" key={index}>{other.label} : {other.value}</p>
                )
            })
        }
       
    </div>
  )
}

export default OtherReport
import React from 'react'

const ProgramReport = ({program}) => {
  return (
    <div className="card text-white bg-secondary my-5 py-4 text-center">

    <div className="card-head h3">{program.name}</div>
     <div class="card-body">
       
       <p class="card-text">{program.description}</p>
       <p class="card-text">{program.type}</p>
     </div>
   
   </div>
  )
}

export default ProgramReport
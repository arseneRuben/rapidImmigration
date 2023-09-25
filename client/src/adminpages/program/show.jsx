import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { useParams} from 'react-router-dom';
import {  useSelector} from 'react-redux';
import SpinnerCustom from '../../redux/SpinnerCustom';

var path = require('path');


const ProgramShow = () => {
  const { id } = useParams();
  const {isLoading, programs} = useSelector((state)=> state.programs)
  const program = programs.find((p) => p.id === parseInt(id))
return (
<PageWrapper>
{isLoading ? <SpinnerCustom/> :
  <div className="d-flex flex-column align-items-center">
      <div className="card text-white bg-secondary my-5 py-4 text-center">

       <div className="card-head h3">{program.name}</div>
        <div class="card-body">
          
          <p class="card-text">{program.description}</p>
          <p class="card-text">{program.type}</p>
        </div>
      
      </div>
  </div>
}
</PageWrapper>
)
}

export default  ProgramShow

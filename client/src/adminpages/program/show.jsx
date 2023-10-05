import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { useParams} from 'react-router-dom';
import {  useSelector} from 'react-redux';
import SpinnerCustom from '../../redux/SpinnerCustom';
import ProgramReport from '../../components/customer/reports/ProgramReport';

var path = require('path');


const ProgramShow = () => {
  const { id } = useParams();
  const {isLoading, programs} = useSelector((state)=> state.programs)
  const program = programs.find((p) => p.id === parseInt(id))
return (
<PageWrapper>
{isLoading ? <SpinnerCustom/> :
  <div className="d-flex flex-column align-items-center">
     <ProgramReport program={program}/>
  </div>
}
</PageWrapper>
)
}

export default  ProgramShow

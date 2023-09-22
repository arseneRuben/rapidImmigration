import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import DownloadLink from "react-download-link";
import { useParams} from 'react-router-dom';
import { useDispatch , useSelector} from 'react-redux';
import IdentityReport from '../../components/customer/reports/IdentityReport';
import ContactReport from '../../components/customer/reports/ContactReport';
import FileReport from '../../components/customer/reports/FileReport';
import MaritalReport from '../../components/customer/reports/MaritalReport';
var path = require('path');


const FolderShow = () => {
  const { id } = useParams();
  const {isLoading, folders} = useSelector((state)=> state.folders)
  const client = folders.find((client) => client.id === parseInt(id))
  console.log(client)
return (
<PageWrapper>
  <div className="d-flex flex-column align-items-center">
      <div className="card text-white bg-secondary my-5 py-4 text-center">
          <div className="card-head h3"> Customers </div>
          <div className="card-body row gx-4 gx-lg-5">
          <div className="row">
                      <div className="col-md-6 mb-5">
                          <IdentityReport client={client}/>
                      </div>
                      
                      <div className="col-md-6 mb-5">
                          <ContactReport client={client}/>
                      </div>
          </div>
          <div className=" row ">
          `   <div className="col-md-8 mb-5">
                         <FileReport client={client}/>
              </div>
              <div className="col-md-3 mb-5">
                          <MaritalReport client={client}/>
               </div>
          </div>
          </div>
      </div>
  </div>
</PageWrapper>
)
}

export default FolderShow
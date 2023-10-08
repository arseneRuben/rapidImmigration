import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { deleteQuote } from '../../api';
const Quote =  () => {
   
    const [quotes, setQuotes] = useState([]); 

    
    function deleteQuot(id){
        deleteQuote(id)
        window.location.reload(false);
    }
 
    useEffect(() => {
            axios
              .get(
                `http://localhost:8080/api/quotes`
              )
              .then((res) => setQuotes(res.data))
              .catch((error) => console.log(error));
        }, []);
    
     
 
  return (
    <>
    <PageWrapper>
       <div className="row">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center h3">
                                       Customer's request
                                    </div>
                                    <div className="panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped table-bordered table-hover  dataTable">
                                                <thead>
                                                    <tr>
                                                       
                                                        <th  id="customerId" >Fullname</th>
                                                        <th  id="programId" >Program</th>
                                                        <th  id="email" >Email</th>
                                                        <th  id="phone" >Phone</th>

                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {quotes.map((quote)=> (

                                                        <tr className="gradeC"  key={quote.id}>
                                                            <td>{quote.full_name }</td>
                                                            <td>{quote.programId  }</td>
                                                            <td>{quote.email }</td>
                                                            <td>{quote.phone_nsumber }</td>
                                                             <td className="center"><button className="btn btn-info"><NavLink to={`/quote/${quote.id}/show`} className="navbar-brand p-0"> <FontAwesomeIcon icon={faEye} /></NavLink></button><button  onClick={()=>deleteQuot(quote.id)} className="btn btn-danger"> <FontAwesomeIcon  icon={faTrash} /></button></td>
                                                        </tr>
                                                    ))
                                                    }
                                                   
                                                </tbody>
                                            </table>
                                        
                                        </div>
                                    </div>
                                   
                                </div>
                           
        </div>
       
    </PageWrapper>
   
    </>
  )
}

export default Quote
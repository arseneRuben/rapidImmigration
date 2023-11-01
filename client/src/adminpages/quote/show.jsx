import React, { useState, useEffect } from 'react';
import PageWrapper from '../../components/pageWrapper'
import { useParams} from 'react-router-dom';
import axios from 'axios'
import { baseURL, updateQuote } from '../../api';


const QuoteShow = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null); 
 
  useEffect(() => {
          axios
            .get(
              `${baseURL}/api/quotes/${id}`
            )
            .then((res) => setQuote(res.data))
            .catch((error) => console.log(error));


          
      }, []);
return (
<PageWrapper>

  {quote && <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr> 
              <td>Full Name</td>
              <td>Phone Number</td>
              <td>Email</td>
              <td>Program</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{quote.full_name}</th>
              <th>{quote.phone_number}</th>
              <th>{quote.email}</th>
              <th>{quote.name}</th>
            </tr>
          </tbody>
        </table> 
    </div>}
    

  
</PageWrapper>
)
}

export default  QuoteShow

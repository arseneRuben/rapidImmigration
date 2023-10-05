import React , {useState, useEffect} from 'react';
import PageWrapper from '../../components/pageWrapper'
import { useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
import IdentityReport from '../../components/customer/reports/IdentityReport';
import ContactReport from '../../components/customer/reports/ContactReport';
import FileReport from '../../components/customer/reports/FileReport';
import MaritalReport from '../../components/customer/reports/MaritalReport';
import axios from "axios";
import OtherReport from '../../components/customer/reports/OtherReport';



const CustomerShow = () =>  {
  const { id } = useParams();
  const {isLoading, customers} = useSelector((state)=> state.customers)
  const [others, setOthers] = useState([])
  const client = customers.find((client) => client.id === parseInt(id))

  useEffect(() => {
      axios
        .get(
          `http://localhost:8080/api/others/customer/${id}`
        )
        .then((res) => setOthers(res.data))
        .catch((error) => console.log(error));
  }, []);
 

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
                <div className="col-md-8 mb-5">
                          <FileReport client={client}/>
                </div>
                <div className="col-md-3 mb-5">
                            <MaritalReport client={client}/>
                </div>
            </div>
            <div className=" row ">
                <div className="col-md-6 mb-5">
                  <OtherReport others={others}/>
                </div>

            </div>


         </div>
      </div>
  </div>
</PageWrapper>
)
}

export default CustomerShow
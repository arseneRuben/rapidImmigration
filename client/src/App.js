import React  from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FrontPages from './frontpages';
import Login from './frontpages/login';
import Register from './frontpages/register';
import {useSelector} from "react-redux"
import SpinnerCustom from './redux/SpinnerCustom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ProfilePage from './adminpages/profile';

import ContactPage from './frontpages/contact';
import ClientList from './adminpages/customer';
import NewCustomer from './adminpages/customer/new';
import CustomerShow from './adminpages/customer/show';
import CustomerEdit from './adminpages/customer/edit';
import NewProgram from './adminpages/program/new';
import Programs from './adminpages/program';

function App() {
  const {loading} = useSelector((state) => state.alerts)
  return (
   <>
    <Router>
    {loading ? (
          <SpinnerCustom />
        ) : (
        
      <Routes>
        <Route path="/signin" element={
            <PublicRoute>
              <Login/>
            </PublicRoute>
        }/>
        <Route path="/signup" element={
            <PublicRoute>
              <Register/>
            </PublicRoute>
        }/>
         <Route path="/contact" element={
            <PublicRoute>
              <ContactPage/>
            </PublicRoute>
        }/>
        <Route path="/" element={ 
            <PublicRoute>
              <FrontPages />
          </PublicRoute>
        }/>
          <Route path="/signout" element={ 
            <PublicRoute>
              <FrontPages />
          </PublicRoute>
        }/>

        <Route path="/folder/:id/show" element={ 
          <ProtectedRoute>
           <CustomerShow/>
          </ProtectedRoute>
        }/>
        <Route path="/folder/:id/edit" element={ 
          <ProtectedRoute>
           <CustomerEdit/>
          </ProtectedRoute>

        }/>
       <Route path="/profile" element={ 
          <ProtectedRoute>
           <ProfilePage/>
          </ProtectedRoute>

        }/>
         <Route path="/folders/new" element={ 
          <ProtectedRoute>
           <NewCustomer/>
          </ProtectedRoute>

        }/>
         <Route path="/folders" element={ 
          <ProtectedRoute>
           <ClientList/>
          </ProtectedRoute>

        }/>

        <Route path="/programs/new" element={ 
          <ProtectedRoute>
           <NewProgram/>
          </ProtectedRoute>

        }/>
        <Route path="/programs" element={ 
          <ProtectedRoute>
           <Programs/>
          </ProtectedRoute>

        }/>
      
      </Routes>
      )}
    </Router>
   </>
  );
}

export default App;

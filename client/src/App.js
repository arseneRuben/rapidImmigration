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
import HomePage from './frontpages/home';
import ProgramShow from './adminpages/program/show';
import ProgramEdit from './adminpages/program/edit';
import Folder from './adminpages/folder';

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
              <HomePage />
          </PublicRoute>
        }/>
          <Route path="/signout" element={ 
            <PublicRoute>
              <FrontPages />
          </PublicRoute>
        }/>

        <Route path="/customer/:id/show" element={ 
          <ProtectedRoute>
           <CustomerShow/>
          </ProtectedRoute>
        }/>
        <Route path="/customer/:id/edit" element={ 
          <ProtectedRoute>
           <CustomerEdit/>
          </ProtectedRoute>

        }/>
       <Route path="/profile" element={ 
          <ProtectedRoute>
           <ProfilePage/>
          </ProtectedRoute>

        }/>
         <Route path="/customers/new" element={ 
          <ProtectedRoute>
           <NewCustomer/>
          </ProtectedRoute>

        }/>
         <Route path="/customers" element={ 
          <ProtectedRoute>
           <ClientList/>
          </ProtectedRoute>

        }/>

        <Route path="/program/new" element={ 
          <ProtectedRoute>
           <NewProgram/>
          </ProtectedRoute>

        }/>
        <Route path="/program/:id/show" element={ 
          <ProtectedRoute>
           <ProgramShow/>
          </ProtectedRoute>

        }/>
        <Route path="/program/:id/edit" element={ 
          <ProtectedRoute>
           <ProgramEdit/>
          </ProtectedRoute>

        }/>
        <Route path="/programs" element={ 
          <ProtectedRoute>
           <Programs/>
          </ProtectedRoute>
        }/>

<       Route path="/folders" element={ 
          <ProtectedRoute>
           <Folder/>
          </ProtectedRoute>

        }/>
      
      </Routes>
      )}
    </Router>
   </>
  );
}

export default App;

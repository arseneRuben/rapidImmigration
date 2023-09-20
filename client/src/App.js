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
import ClientList from './adminpages/folder';
import NewFolder from './adminpages/folder/new';
import FolderShow from './adminpages/folder/show';
import FolderEdit from './adminpages/folder/edit';

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
           <FolderShow/>
          </ProtectedRoute>
        }/>
        <Route path="/folder/:id/edit" element={ 
          <ProtectedRoute>
           <FolderEdit/>
          </ProtectedRoute>

        }/>
       <Route path="/profile" element={ 
          <ProtectedRoute>
           <ProfilePage/>
          </ProtectedRoute>

        }/>
         <Route path="/folders/new" element={ 
          <ProtectedRoute>
           <NewFolder/>
          </ProtectedRoute>

        }/>
         <Route path="/folders" element={ 
          <ProtectedRoute>
           <ClientList/>
          </ProtectedRoute>

        }/>
      
      </Routes>
      )}
    </Router>
   </>
  );
}

export default App;

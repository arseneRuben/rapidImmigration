import React  from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FrontPages from './frontpages';
import Login from './frontpages/login';
import Register from './frontpages/register';
import AdminPages from './adminpages';
import {useSelector} from "react-redux"
import SpinnerCustom from './components/redux/SpinnerCustom';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ProfilePage from './adminpages/profile';
import NewFolder from './folder/new';
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
      
      </Routes>
      )}
    </Router>
   </>
  );
}

export default App;

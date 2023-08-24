import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FrontPages from './frontpages';
import Login from './frontpages/login';
import Register from './frontpages/register';
import AdminPages from './adminpages';
import {useSelector} from "react-redux"
import { Spinner } from 'react-bootstrap';
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
   <>
    <Router>
      {loading && <Spinner/>}
      <Routes>

        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/" element={<FrontPages/>}/>
        <Route path="/admin" element={<AdminPages/>}/>
        <Route path="/profile" element={<AdminPages/>}/>
        <Route path="/folders/new" element={<AdminPages/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

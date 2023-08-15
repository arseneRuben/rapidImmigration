import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './frontpages/HomePage';
import Login from './frontpages/login';
import Register from './frontpages/register';
import AdminHomePage from './adminpages/HomePage';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminHomePage/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

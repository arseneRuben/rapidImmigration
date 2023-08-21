import React, { Component }  from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import FrontPages from './frontpages';
import Login from './frontpages/login';
import Register from './frontpages/register';
import AdminPages from './adminpages';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/signin" element={<Login/>}/>
        <Route path="/signup" element={<Register/>}/>
        <Route path="/" element={<FrontPages/>}/>
        <Route path="/admin" element={<AdminPages/>}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;

import {BrowserRouter as Router, Route, Switch, Routes} from 'react-router-dom';
import HomePage from './frontpages/HomePage';
import Login from './frontpages/Login';
import Register from './frontpages/Register';
import AdminHomePage from './adminpages/HomePage';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminHomePage/>}/>
      
      </Routes>
    </Router>
   </>
  );
}

export default App;

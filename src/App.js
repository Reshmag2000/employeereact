import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Switch } from '@mui/material';
import Dashboard from './Components/Dashboard';
import Employeeform from './Components/Employeeform';
import Navbar from './Components/Navbar';


const App = () => {
  return (
    
    // <Router>
    //   <Navbar/>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/employee-form">Employee Form</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/employee-form">
    //         <Employeeform />
    //       </Route>
    //       <Route path="/">
    //         <Dashboard />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>
    <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/employee-form' element={<Employeeform/>}/>

    </Routes>
    </div>

  );
};

export default App;



  
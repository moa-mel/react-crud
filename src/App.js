import React from 'react'
import './App.css';
import Navbar from "./component/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm  from "./component/EmployeeForm";
import EmployeeList  from "./component/EmployeeList";

function App() {
  return ( 
    <Router>
    <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
     </Router>
  );
}

export default App;

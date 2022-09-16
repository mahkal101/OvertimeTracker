import logo from './logo.svg';
import AmentumLogo from './img/Amentum-logo.png'
import './App.css';
import Employees from './Employees';
import React, { useState,useEffect } from 'react';
   
function App() {

  const [employees, setEmployees] = useState([
    {fullName:"Aldo Casillas",designation:"AP Mechanic",gender:"male",teamName:'Mechanics', id:1, isSelected: false},
    {fullName:"David Lathem",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:2, isSelected: false},
    {fullName:"Michael Saladino",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:4,isSelected: false},
    {fullName:"Fernando Garcia",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:3, isSelected: false}]);

    const employeesRecall = employees;
  
    useEffect(() => {
      localStorage.setItem('employeeList',JSON.stringify(employees));
    },[employees]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={AmentumLogo} className="Amentum-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <Employees employees={employees}
                   handleArrayRotate={handleArrayRotate} />
                   <button className="btn-form" onClick={handleArrayRotate}> Rotate </button>
        
      </header>
    </div>
  );


  async function handleArrayRotate()
  {
    const newEmployees = employees;
    newEmployees.push(newEmployees.shift());
    setEmployees([...newEmployees]);
    console.log(employees);
    await 1;
  }
}

export default App;

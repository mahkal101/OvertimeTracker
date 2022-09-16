import React, { useState } from 'react';
import maleProfile from './img/maleProfile.jpg';
import './App.css';




const Employees = ({employees}) => {    


    const employeesRecall = [
        {fullName:"Aldo Casillas",designation:"AP Mechanic",gender:"male",teamName:'Mechanics', id:1},
        {fullName:"David Lathem",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:2},
        {fullName:"Fernando Garcia",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:3},
        {fullName:"Michael Saladino",designation:"AP Mechanic",gender:"male",teamName:'Mechanics',id:4},];

        
return  (
        <main className="container">
        <h1 className="header">Recall Order</h1>
        <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10">
            <div className = "card-collection">
            {employeesRecall.map((employee) => 
                    (
                        <div key={employee.id} className="card m-2">
                            <div className="card-body">  
                                <p  className="card-text"><b> { employee.fullName }</b></p>
                            </div>
                        </div>
                    )
                )    
            }  
            </div>
        </div>
    </div>
        <h1 className="header">OverTime Order</h1>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-10">
                    <div className = "card-collection">
                    {employees.map((employee) => 
                            (
                                <div key={employee.id} className="card m-2">
                                
                                    <img src={maleProfile} className="card-img-top" alt = "" />
                                    <div className="card-body">  
                                        <h5 className="card-title"> Designation: { employee.designation }</h5>
                                        <p  className="card-text"><b> { employee.fullName }</b></p>
                                    </div>
                                </div>
                            )
                        )    
                    }  
                        
                    </div>
                </div>
            </div>
        </main>
)
}

export default Employees
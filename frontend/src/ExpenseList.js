import React, { useEffect } from "react";
//import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function ExpenseList(){
        //const [data, setData] = useState([]);
      
        const [expenses, setExpenses] = useState([]);

        useEffect(() => {
          axios.get('http://localhost:3001/expense')
            .then(response => {
              setExpenses(response.data); 
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }, []);
    
        
        
            return(
                <div className="d-flex justify-content-center align-items-center bg-warning vh-100">
                    <div className="w-50 bg-white rounded p-3">
                        <Link to="/Expense" className="btn btn-success">Add</Link>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>date</th>
                                <th>amount</th>
                                <th>category</th>
                                
                                
                            </tr>
                            </thead>
                        <tbody>
                                 {
                                    expenses.map((data, i) => (
                                         <tr key={i}>
                                            <td>{data.date}</td>
                                            <td>{data.amount}</td>
                                            <td>{data.category}</td>
                                            </tr>
        
                                    )
                                    
                                    )
                                 }
                        </tbody>
                        </table>
                    </div>
                 </div>        
        )
        }
    
    export default ExpenseList;
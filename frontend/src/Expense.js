import React, {useState} from "react";
import "./App.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function Expense(){
    const [date, setDate] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [expensestatus, setExpenseStatus]=useState("");
//}
const expense = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/expense", {
      date: date,
      amount: amount,
      category: category,
    }).then((response) => {
      setExpenseStatus(response);
      // console.log(response);
      if(response.data.message){
        setExpenseStatus(response.data.message);
      }else{
        setExpenseStatus("New Expense Added");
      }
    })
  }



return(
    <div className="container">
    <div className="loginForm">
            <form>
              <h4>ADD EXPENSE</h4>
              <label htmlFor="date">Date</label>
              <input className="textInput" type="Date" name="email" onChange={(e) => {setDate(e.target.value)}} placeholder="Enter Date" required />
              <label htmlFor="amount">Amount</label>
              <input className="textInput" type="text" name="username" onChange={(e) => {setAmount(e.target.value)}} placeholder="Enter Amount" required />
              <label htmlFor="Category">Category</label>
              <input className="textInput" type="text" name="password" onChange={(e) => {setCategory(e.target.value)}} placeholder="Enter category" required />
              <input className="button" type="submit" onClick={expense} value="Add Expense" />
              <Link to="/expenselist" className="btn btn-success btn-default w-100 ">Expense List</Link>
              <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{expensestatus}</h1>
              
            </form>
    </div>
    </div>
    
        
    );
    }
    
    export default Expense;
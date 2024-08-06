import React from "react";
import "./App.css";
import Register from "./Register";
import Login from "./Login";
import Expense from "./Expense";
import ExpenseList from "./ExpenseList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(){
  return(
    <div ClassName="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        <Route path="/expense" element={<Expense/>}> </Route>
        <Route path="/expenselist" element={<ExpenseList/>}> </Route>

      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;





import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { addExpense } from '../store/actions/expenseActions';

function AddExpense() {

  const dispatch  = useDispatch();

  const [expense, setExpense] = useState({
    id: '',
    expenseType: '',
    amount: ''
  });
  

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name] : e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense(expense))
    setExpense({
      id: uuidv4(),
      expenseType: "",
      amount: "",
    });
  }

  return (
    <>
    <div className="container" style={{ margin: "4rem auto" }}>
      
      <h5 className="blue-text center-align">Go-Dutch </h5>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
        
          <label htmlFor="post_title">Expense Type</label>
          <input
            onChange={handleChange}
            value={expense.expenseType}
            type="text"
            name="expenseType"
          />
          
        </div>
        <div className="input-field">
          <label htmlFor="post_content">Money Spent</label>
          <input
            onChange={handleChange}
            value={expense.amount}
            type="text"
            name="amount"
            enterKeyHint='amount'
          ></input>
        </div>
        <div className="input-field">
          <button className="btn blue">
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
    
    </>
  )
}

export default AddExpense
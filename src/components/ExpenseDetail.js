import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeExpense, updateExpense } from "../store/actions/expenseActions";

function ExpenseDetail({ expense }) {
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(false);

  const [exp, setExpense] = useState({
    id: "",
    expenseType: "",
    amount: "",
  });

  const handleChange = (e) => {
    setExpense({ ...exp, [e.target.name]: e.target.value });
  };

  const onEditHandle = (e) => {
    setClicked(true);
    setExpense({
      id: expense.id,
      expenseType: expense.expenseType,
      amount: expense.amount,
    });
  };

  const onUpdateHandle = (e) => {
    setClicked(false);

    dispatch(updateExpense(exp));
  };

  return (
    <div className="col s12 m6">
      <div className="card">
        {!clicked && (
          <div className="card-content">
            <span className="card-title">{expense.expenseType}</span>
            <p>{expense.amount}</p>
          </div>
        )}

        {clicked && (
          <div>
            <input
              onChange={handleChange}
              value={exp.expenseType}
              type="text"
              name="expenseType"
            />

            <input
              onChange={handleChange}
              value={exp.amount}
              type="text"
              name="amount"
              enterKeyHint="amount"
            />
          </div>
        )}
        <div className="card-action">
          {!clicked && (
            <div>
              <button
                id="deleteButtonId"
                onClick={() => dispatch(removeExpense(expense.id))}
                className="btn red"
              >
                Delete
              </button>
              <button className="btn blue" onClick={onEditHandle}>
                edit
              </button>
            </div>
          )}
          {clicked && (
            <button className="btn green" onClick={onUpdateHandle}>
              update
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExpenseDetail;

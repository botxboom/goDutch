import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/actions/expenseActions";
import {
  Button,
  DropDownSelect,
  Form,
  FormContent,
  FormInput,
  Input,
} from "./styles/AddExpense.Style";
import { expenseTypesList } from "../Helpers/Helper";

function AddExpense() {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({
    id: uuidv4(),
    expenseType: "Travel",
    amount: "",
    color: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eColor = expenseTypesList.find((e) => e.text === expense.expenseType);
    expense.color = eColor.color;
    dispatch(addExpense(expense));
    setExpense({
      id: uuidv4(),
      expenseType: expense.expenseType,
      amount: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContent>
        <FormInput>
          <DropDownSelect
            name="expenseType"
            onChange={handleChange}
            id="options"
            value={expense.expenseType}
          >
            {expenseTypesList.map((e, i) => (
              <option value={e.value} key={i} name="adsf">
                {e.text}
              </option>
            ))}
          </DropDownSelect>
          <Input
            value={expense.amount}
            placeholder="Spent..."
            name="amount"
            type="number"
            onChange={handleChange}
            required
          />
        </FormInput>
        <Button>Add</Button>
      </FormContent>
    </Form>
  );
}

export default AddExpense;

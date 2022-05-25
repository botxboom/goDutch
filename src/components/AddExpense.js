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
} from "./AddExpense.Style";
import { expenseTypesList } from "../Helpers/Helper";

function AddExpense() {
  const dispatch = useDispatch();
  const [expense, setExpense] = useState({
    id: "",
    expenseType: "",
    amount: "",
  });

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            defaultValue="Travel"
            value={expense.expenseType}
          >
            {expenseTypesList.map((e) => (
              <option value={e.value} key={e.key} name="adsf">
                {e.text}
              </option>
            ))}
          </DropDownSelect>
          <Input value={expense.amount} name="amount" onChange={handleChange} />
        </FormInput>
        <Button>Add</Button>
      </FormContent>
    </Form>
  );
}

export default AddExpense;

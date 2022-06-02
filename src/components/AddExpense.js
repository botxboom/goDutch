import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addExpense } from "../store/actions/expenseActions";
import {
  Button,
  DropDownSelect,
  Form,
  FormContent,
  FormInput,
  Input,
} from "./styles/AddExpense.Style";
import { setCategories } from "../store/actions/categoryActions";

const getListURL = "https://ispent.herokuapp.com/api/getList";

function AddExpense() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.categoryReducer);
  const [expense, setExpense] = useState({
    id: uuidv4(),
    expenseType: "Travel",
    amount: "",
    color: "",
  });

  useEffect(() => {
    axios
      .get(getListURL)
      .then((res) => {
        dispatch(setCategories(res.data));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eColor = list.find((e) => e.value === expense.expenseType);
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
            {list.map((e, i) => (
              <option value={e.value} key={i} name="adsf">
                {e.value}
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

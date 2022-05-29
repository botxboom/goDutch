import React, { useState } from "react";
import { useDispatch } from "react-redux";
import editImage from "../images/edit.svg";
import removeImage from "../images/remove.svg";
import doneImage from "../images/done.svg";
import { removeExpense, updateExpense } from "../store/actions/expenseActions";
import {
  ActionButton,
  ListActions,
  ListCard,
  ListContainer,
  ListContent,
} from "./styles/ExpenseDetails.Style";
import { Form, FormInput, Input } from "./styles/AddExpense.Style";

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

  const onSubmitHandle = (e) => {
    setClicked(false);
    dispatch(updateExpense(exp));
  };

  return (
    <>
      <ListContainer>
        <ListCard>
          {clicked ? (
            <>
              <ListContent>
                <h3>{expense.expenseType}</h3>
              </ListContent>

              <Form onSubmit={onSubmitHandle}>
                <FormInput>
                  <Input
                    value={exp.amount.toLocaleString()}
                    placeholder="Spent..."
                    name="amount"
                    type="number"
                    onChange={handleChange}
                    required
                  />
                  <ActionButton>
                    <img className="done_img" alt="done" src={doneImage}></img>
                  </ActionButton>
                </FormInput>
              </Form>
            </>
          ) : (
            <>
              <ListContent>
                <h3>{expense.expenseType}</h3>
                <h3>₹ {expense.amount.toLocaleString()}</h3>
              </ListContent>
              <ListActions>
                <ActionButton onClick={onEditHandle}>
                  <img className="edit_img" alt="edit" src={editImage}></img>
                </ActionButton>
                <ActionButton onClick={() => dispatch(removeExpense(expense))}>
                  <img
                    className="remove_img"
                    alt="remove"
                    src={removeImage}
                  ></img>
                </ActionButton>
              </ListActions>
            </>
          )}
        </ListCard>
      </ListContainer>
    </>
  );
}

export default ExpenseDetail;

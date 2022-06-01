import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../GlobalStyles";
import removeImage from "../images/remove.svg";
import { addCategory, removeCategory } from "../store/actions/categoryActions";
import { Form, FormContent, FormInput, Input } from "./styles/AddExpense.Style";
import {
  ActionButton,
  ListActions,
  ListCard,
  ListContainer,
  ListContent,
} from "./styles/ExpenseDetails.Style";

const createTypeURL = "http://localhost:8080/api/createType";
const removeTypeURL = "http://localhost:8080/api/deleteType";

function CreateType() {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store.categoryReducer);
  const [eType, setEType] = useState("");

  const handleChange = (e) => {
    setEType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(createTypeURL, { params: { value: eType } })
      .then((res) => {
        if (res.data.expense) {
          dispatch(addCategory(res.data.expense));
        } else {
          alert("category already added");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    axios.post(removeTypeURL, { params: { id: e._id } }).then((res) => {
      if (res.data.deleted !== null) {
        dispatch(removeCategory(e._id));
      } else {
        alert("something went wrong");
      }
    });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormContent>
          <FormInput>
            <Input
              value={eType}
              placeholder="Enter Category"
              name="expenseType"
              type="text"
              onChange={handleChange}
              required
            />
          </FormInput>
          <Button>Add</Button>
          <h3>Available Categories</h3>
        </FormContent>
      </Form>

      {list &&
        list.map((e, k) => (
          <ListContainer key={k}>
            <ListCard style={{ backgroundColor: e.color }}>
              <ListContent>
                <h3>{e.value}</h3>
              </ListContent>
              <ListActions>
                <ActionButton value={e.id} onClick={() => handleDelete(e)}>
                  <img
                    className="remove_img"
                    alt="remove"
                    src={removeImage}
                  ></img>
                </ActionButton>
              </ListActions>
            </ListCard>
          </ListContainer>
        ))}
    </>
  );
}

export default CreateType;

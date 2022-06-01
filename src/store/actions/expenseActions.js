import { ADD_EXPENSE, REMOVE_EXPENSE, UPDATE_EXPENSE } from "./actions";

const addExpense = (expense) => {
  return { type: ADD_EXPENSE, expense };
};

const removeExpense = (expense) => {
  return { type: REMOVE_EXPENSE, expense };
};

const updateExpense = (expense) => {
  return { type: UPDATE_EXPENSE, expense };
};

export { addExpense, removeExpense, updateExpense };

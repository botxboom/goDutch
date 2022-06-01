import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  UPDATE_EXPENSE,
  REFRESH_EXPENSE,
} from "./actions";

const addExpense = (expense) => {
  return { type: ADD_EXPENSE, expense };
};

const removeExpense = (expense, amount = 0) => {
  return { type: REMOVE_EXPENSE, expense, amount };
};

const updateExpense = (expense) => {
  return { type: UPDATE_EXPENSE, expense };
};

const refreshExpense = () => {
  return { type: REFRESH_EXPENSE };
};

export { addExpense, removeExpense, updateExpense, refreshExpense };

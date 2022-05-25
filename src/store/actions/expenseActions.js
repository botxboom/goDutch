const addExpense = (expense) => {
  return { type: "ADD_EXPENSE", expense };
};

const removeExpense = (id) => {
  return { type: "REMOVE_EXPENSE", id };
};

const updateExpense = (expense) => {
  return { type: "UPDATE_EXPENSE", expense };
};

export { addExpense, removeExpense, updateExpense };

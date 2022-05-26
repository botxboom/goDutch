const addExpense = (expense) => {
  return { type: "ADD_EXPENSE", expense };
};

const removeExpense = (expense) => {
  return { type: "REMOVE_EXPENSE", expense };
};

const updateExpense = (expense) => {
  return { type: "UPDATE_EXPENSE", expense };
};

export { addExpense, removeExpense, updateExpense };

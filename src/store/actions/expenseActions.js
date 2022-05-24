export const addExpense = (expense) => {
    return { type: "ADD_EXPENSE", expense }
}
  
export const removeExpense = (id) => {
  return { type: "REMOVE_EXPENSE", id }
}

export const updateExpense = (expense) => {
  return {type: "UPDATE_EXPENSE", expense}
}
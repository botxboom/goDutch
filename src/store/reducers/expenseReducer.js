const initState = {
  expenses: [
    { id: 1, expenseType: "Travel", amount: 1200 },
    { id: 2, expenseType: "Groceries", amount: 3500 },
  ],

  subTotal: 4700,
};

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const isPresent = state.expenses.find((e) =>
        e.expenseType === action.expense.expenseType ? true : false
      );
      if (isPresent) {
        const index = state.expenses.findIndex(
          (expense) => expense.id === isPresent.id
        );

        state.subTotal -= state.expenses[index].amount;
        state.expenses[index].amount += parseInt(action.expense.amount);

        return {
          ...state,
          subTotal: state.subTotal + state.expenses[index].amount,
        };
      } else
        return {
          expenses: [
            { ...action.expense, amount: parseInt(action.expense.amount) },
            ...state.expenses,
          ],
          subTotal: state.subTotal + parseInt(action.expense.amount),
        };
    case "REMOVE_EXPENSE":
      const newExpense = state.expenses.filter(
        (expense) => expense.id !== action.expense.id
      );
      return {
        expenses: newExpense,
        subTotal: state.subTotal - action.expense.amount,
      };
    case "UPDATE_EXPENSE":
      const isAdded = state.expenses.find((e) =>
        e.expenseType === action.expense.expenseType ? true : false
      );

      const index = state.expenses.findIndex(
        (expense) => expense.id === action.expense.id
      );

      if (isAdded) {
        const index = state.expenses.findIndex(
          (expense) => expense.id === isAdded.id
        );

        state.subTotal -= state.expenses[index].amount;
        state.expenses[index].amount += parseInt(action.expense.amount);

        return {
          ...state,
          subTotal: state.subTotal + state.expenses[index].amount,
        };
      } else {
        const newExpenses = [...state.expenses];

        state.subTotal -= newExpenses[index].amount;

        newExpenses[index].expenseType = action.expense.expenseType;
        newExpenses[index].amount = parseInt(action.expense.amount);
        return {
          ...state,
          expenses: newExpenses,
          subTotal: state.subTotal + parseInt(action.expense.amount),
        };
      }

    default:
      return state;
  }
};

export default expenseReducer;

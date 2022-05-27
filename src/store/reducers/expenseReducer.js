const initState = {
  expenses: [],
  subTotal: 0,
};

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      const isPresent = state.expenses.find(
        (e) => e.expenseType === action.expense.expenseType
      );

      if (isPresent) {
        const index = state.expenses.findIndex(
          (e) => e.expenseType === isPresent.expenseType
        );
        state.expenses[index].amount += parseInt(action.expense.amount);
        state.subTotal += parseInt(action.expense.amount);

        return {
          ...state,
        };
      } else {
        return {
          expenses: [
            {
              ...action.expense,
              amount: parseInt(action.expense.amount),
            },
            ...state.expenses,
          ],
          subTotal: state.subTotal + parseInt(action.expense.amount),
        };
      }

    case "REMOVE_EXPENSE":
      const newExpense = state.expenses.filter(
        (expense) => expense.id !== action.expense.id
      );
      return {
        expenses: newExpense,
        subTotal: state.subTotal - action.expense.amount,
      };

    case "UPDATE_EXPENSE":
      const index = state.expenses.findIndex((e) => e.id === action.expense.id);

      state.subTotal -= state.expenses[index].amount;

      state.expenses[index].amount = parseInt(action.expense.amount);
      state.subTotal += parseInt(action.expense.amount);
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default expenseReducer;

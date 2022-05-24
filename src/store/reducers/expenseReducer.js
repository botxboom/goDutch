const initState = {
    expenses: [
      {id: 1, expenseType: 'Travel', amount: 1200 },
      {id: 2, expenseType: 'Groceries', amount: 3500 },
    ],

    subTotal: 4700
};

// {id: action.expense.id, expenseType: action.expense.expenseType, amount: parseInt(action.expense.amount)}

const expenseReducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return {
                expenses: [{...action.expense, amount: parseInt(action.expense.amount)},  ...state.expenses],
                subTotal: state.subTotal + parseInt(action.expense.amount)
            }
        case "REMOVE_EXPENSE":
            const newExpense = state.expenses.filter(expense => expense.id !== action.id)
            const getExpense = state.expenses.filter(expense => expense.id === action.id )
            return {
                expenses: newExpense,
                subTotal: state.subTotal - getExpense[0].amount
            }
        case "UPDATE_EXPENSE":
            const index = state.expenses.findIndex(expense => expense.id === action.expense.id);
            const newExpenses = [...state.expenses];

            state.subTotal -= newExpenses[index].amount

            newExpenses[index].expenseType = action.expense.expenseType
            newExpenses[index].amount = parseInt(action.expense.amount)

            

            return {
                ...state,
                expenses: newExpenses,
                subTotal: state.subTotal + parseInt(action.expense.amount)
            }
        default:
            return state;
    }
}


export default expenseReducer
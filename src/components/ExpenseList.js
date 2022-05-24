import React from 'react'
import ExpenseDetail from './ExpenseDetail'

function ExpenseList({expenses}) {

  return (
    <div className="container">
      <div className="row">
        {expenses &&
          expenses.map((expense) => <ExpenseDetail expense={expense} key={expense.id} />)}
      </div>
    </div>
  )
}

export default ExpenseList
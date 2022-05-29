import React from "react";
import { useSelector } from "react-redux";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import { PageContainer } from "./styles/AddExpense.Style";

function Homepage() {
  const { expenses } = useSelector((store) => store);

  return (
    <PageContainer>
      <AddExpense />
      <ExpenseList expenses={expenses} />
    </PageContainer>
  );
}

export default Homepage;

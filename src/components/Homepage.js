import React from "react";
import { useSelector } from "react-redux";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import NavBar from "./NavBar";
import { PageContainer } from "./styles/AddExpense.Style";
import { ExpenseDetailCard } from "./styles/ExpenseDetails.Style";

function Homepage() {
  const { expenses, subTotal } = useSelector((store) => store);

  return (
    <>
      <NavBar total={subTotal} />
      <PageContainer>
        <AddExpense />
        <ExpenseList expenses={expenses} />
      </PageContainer>
    </>
  );
}

export default Homepage;

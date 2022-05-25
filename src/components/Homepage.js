import React from "react";
import { useSelector } from "react-redux";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import NavBar from "./NavBar";

function Homepage() {
  const { expenses, subTotal } = useSelector((store) => store);

  return (
    <>
      <NavBar total={subTotal} />
      <AddExpense />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default Homepage;

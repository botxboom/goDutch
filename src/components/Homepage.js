import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshExpense } from "../store/actions/expenseActions";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import { PageContainer } from "./styles/AddExpense.Style";

function Homepage() {
  const { expenses } = useSelector((store) => store.expenseReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshExpense());
  }, []);

  return (
    <PageContainer>
      <AddExpense />
      <ExpenseList expenses={expenses} />
    </PageContainer>
  );
}

export default Homepage;

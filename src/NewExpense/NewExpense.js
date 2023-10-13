import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData=(expense)=>{
props.addExpenseData(expense);
  }
    return (
      <div className="new-expense">
        <ExpenseForm submitExpense={saveExpenseData} />
      </div>
    );
};

export default NewExpense;

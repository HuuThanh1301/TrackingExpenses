import { useState } from "react";
import classes from './NewExpense.module.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  }

  const hideFormHandler = () => {
    setShowForm(false);
  }

  return (
    <div className={classes.new_expense}>
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {showForm && <ExpenseForm onHideForm={hideFormHandler}/>}
    </div>
  );
}

export default NewExpense;
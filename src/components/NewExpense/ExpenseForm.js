import { useState } from 'react';
import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  }
  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
  }
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: parseInt(enteredAmount),
      date: new Date(enteredDate)
    };
    props.onAdd(expenseData);
    props.onHideForm();
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form_controls}>
        <div className={classes.form_control}>
          <label>Title</label>
          <input type="text" name="title" id="title" onChange={titleChangeHandler}></input>
        </div>
        <div className={classes.form_control}>
          <label>Amount</label>
          <input type="number" name="amount" id="amount" step='0.01' min='0.01' onChange={amountChangeHandler}></input>
        </div>
        <div className={classes.form_control}>
          <label>Date</label>
          <input type="date" name="date" id="date" min='2022-01-01' max='2024-12-31' onChange={dateChangeHandler}></input>
        </div>
      </div>
      
      <div className={classes.button_control}>
        <button onClick={props.onHideForm}>Cancel</button>
        <button>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
import classes from "./EditForm.module.css";
import { useState } from "react";

const EditForm = (props) => {
  const { editItem } = props;
  const editItemDate = editItem.date.toLocaleDateString("en-GB");
  let splitDate = editItemDate.split('/');
  let formatDate = splitDate[2] + '-' + splitDate[1] + '-' + splitDate[0];
  const [updateItemTitle, setUpdateItemTitle] = useState(editItem.title);
  const [updateItemAmount, setUpdateItemAmount] = useState(editItem.amount);
  const [updateItemDate, setUpdateItemDate] = useState(editItem.date);

  const titleChangeHandler = (e) => {
    setUpdateItemTitle(e.target.value);
  }

  const amountChangeHandler = (e) => {
    setUpdateItemAmount(e.target.value);
  }

  const dateChangeHandler = (e) => {
    setUpdateItemDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.onUpdate({
      id: editItem.id,
      title: updateItemTitle,
      amount: updateItemAmount,
      date: new Date(updateItemDate)
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.form_controls}>
        <div className={classes.form_control}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={editItem.title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className={classes.form_control}>
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            step="0.01"
            min="0.01"
            defaultValue={editItem.amount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className={classes.form_control}>
          <label>Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2022-01-01"
            max="2024-12-31"
            defaultValue={formatDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>

      <div className={classes.button_control}>
        <button onClick={props.onCancleEdit}>Cancel</button>
        <button>Edit Expense</button>
      </div>
    </form>
  );
};

export default EditForm;

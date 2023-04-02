import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  return (
    <form>
      <div className={classes.form_controls}>
        <div className={classes.form_control}>
          <label>Title</label>
          <input type="text" name="title" id="title"></input>
        </div>
        <div className={classes.form_control}>
          <label>Amount</label>
          <input type="number" name="amount" id="amount"></input>
        </div>
        <div className={classes.form_control}>
          <label>Date</label>
          <input type="date" name="date" id="date"></input>
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
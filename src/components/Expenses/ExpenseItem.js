import classes from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  return (
    <div className={classes["expense-item"]}>
      <h2>{props.title}</h2>
      <div className={classes["expense-item__price"]}>{props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
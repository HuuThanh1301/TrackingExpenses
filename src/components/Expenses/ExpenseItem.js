import classes from './ExpenseItem.module.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

  const deleteHandler = () => {
    props.onRemove(props.id);
  }
  
  return (
    <div className={classes["expense-item"]} onClick={deleteHandler}>
      <ExpenseDate date={props.date}/>
      <div className={classes["expense-item__description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
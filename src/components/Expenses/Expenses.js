
import classes from './Expenses.module.css';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  return (
    <div className={classes.expenses}>
      <ExpensesList items={props.items}/>
    </div>
 
  )
}

export default Expenses;
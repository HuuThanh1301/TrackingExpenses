import ExpenseItem from "./ExpenseItem";
import classes from './ExpensesList.module.css';

const ExpensesList = (props) => {
  return (
    <ul className={classes['expenses-list']}>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;


import { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import classes from './Expenses.module.css';
import ExpensesList from "./ExpensesList";
import ExpenseChart from '../Chart/ExpenseChart';

const Expenses = (props) => {
  const [filterYear, setFilteredYear] = useState('2023');

  const filterHandler = (year) => {
    setFilteredYear(year);
  }

  const filterExpenses = props.items.filter(item => item.date.getFullYear() === parseInt(filterYear));

  return (
    <div className={classes.expenses}>
      <ExpensesFilter onFilter={filterHandler} defautYear={filterYear}/>
      <ExpenseChart items={filterExpenses}/>
      <ExpensesList items={filterExpenses} onRemove={props.onRemove} onEdit={props.onEdit}/>
    </div>
 
  )
}

export default Expenses;
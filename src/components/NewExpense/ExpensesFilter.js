import classes from './ExpensesFilter.module.css';

const ExpensesFilter = (props) => {
  const changeYearHandler = (e) => {
    props.onFilter(e.target.value);
  }
  return (
    <div className={classes.filter}>
      <label>Filter by year</label>
      <select name='selected-year' id='selected-year' onChange={changeYearHandler} value={props.defautYear}>
        <option value='2022'>2022</option>
        <option value='2023'>2023</option>
        <option value='2024'>2024</option>
      </select>
    </div>
  );
}

export default ExpensesFilter;
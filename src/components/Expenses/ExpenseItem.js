import classes from "./ExpenseItem.module.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const { item } = props;
  const deleteHandler = () => {
    props.onRemove(item.id);
  };

  const editHandler = () => {
    props.onEdit(item);
    console.log("editdate: " + item.date.toLocaleDateString("en-GB"));
  }

  return (
    <div className={classes["expense-item"]}>
      <ExpenseDate date={item.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{item.title}</h2>
        <div className={classes["expense-item__price"]}>${item.amount}</div>
        <div className={classes["expense-item__edit"]} onClick={editHandler}>
          Edit
        </div>
        <div
          className={classes["expense-item__delete"]}
          onClick={deleteHandler}
        >
          Del
        </div>
      </div>
    </div>
  );
};
export default ExpenseItem;

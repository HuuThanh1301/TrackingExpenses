import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Modal from "./components/Modal/Modal";
import EditForm from "./components/Modal/EditForm";

const dummy_data = [
  {
    id: "e0",
    title: "CPU I5 13600k",
    amount: 500,
    date: new Date(2022, 7, 25),
  },
  {
    id: "e1",
    title: "1TB SSD Kingston KC 3000",
    amount: 109,
    date: new Date(2022, 7, 25),
  },
  {
    id: "e2",
    title: "Corsair RM850x PSU",
    amount: 219,
    date: new Date(2022, 8, 13),
  },
  {
    id: "e3",
    title: "Gigabyte Z790 AORUS ELITE AX ICE Motherboard",
    amount: 489,
    date: new Date(2023, 0, 13),
  },
  {
    id: "e4",
    title: "Kingston Fury Beast RGB DDR5 32GB(2x16GB) 6000MHz - White",
    amount: 169,
    date: new Date(2023, 1, 14),
  },
  {
    id: "e5",
    title: "Gigabyte GeForce RTX 4060 Ti AERO OC 8G Graphics Card",
    amount: 715,
    date: new Date(2023, 2, 15),
  },
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState({});
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  };

  const removeHandler = (id) => {
    setExpenses((prevState) => {
      const updatedState = [...prevState].filter((item) => item.id !== id);
      return updatedState;
    });
  };

  const editHandler = (item) => {
    setEdit(true);
    setEditItem(item);
  };

  const updateHandler = (updatedItem) => {
    setExpenses((prevState) => {
      setEdit(false);
      let updatedState = prevState.map((item) => {
        if (item.id === updatedItem.id) {
          item.title = updatedItem.title;
          item.amount = updatedItem.amount;
          item.date = updatedItem.date;
          console.log("updated item: " + item.id + " " + item.title + " " + item.amount + " " + item.date);
        }        
        return item;
      });
      console.log("updated state: " + updatedState);
      return updatedState;
    });
  };

  return (
    <>
      {edit && (
        <Modal onCancleEdit={() => setEdit(false)}>
          <EditForm
            onCancleEdit={() => setEdit(false)}
            editItem={editItem}
            onUpdate={updateHandler}
          />
        </Modal>
      )}
      <NewExpense onAdd={addExpenseHandler} />
      <Expenses
        items={expenses}
        onRemove={removeHandler}
        onEdit={editHandler}
      />
    </>
  );
}

export default App;

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [
  {
    id: 'e0',
    title: 'Ram',
    amount: 200,
    date: new Date(2022, 7, 25)
  },
  {
    
    id: 'e1',
    title: 'SSD',
    amount: 120,
    date: new Date(2023, 1, 8)
  },
  {
    id: 'e2',
    title: 'Mainboard',
    amount: 350,
    date: new Date(2023, 1, 7)
  },
  {
    id: 'e3',
    title: 'CPU',
    amount: 500,
    date: new Date(2023, 8, 6)
  },
  // {
  //   id: 'e4',
  //   title: 'PSU',
  //   amount: 150,
  //   date: new Date(2024, 2, 5)
  // }
];

function App() {
  const [expenses, setExpenses] = useState(dummy_data);
  const addExpenseHandler = (expense) => {
    setExpenses(prevState => [expense, ...prevState]);
  }
  return (
    <div>
      <NewExpense onAdd={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_data = [
  {
    id: 'e1',
    title: 'Mouse',
    amount: 95.99,
    date: new Date(2023, 1, 8)
  },
  {
    id: 'e2',
    title: 'Keyboard',
    amount: 159.99,
    date: new Date(2023, 1, 7)
  },
  {
    id: 'e3',
    title: 'Oil',
    amount: 34,
    date: new Date(2023, 8, 6)
  },
  {
    id: 'e4',
    title: 'Mousepad',
    amount: 20,
    date: new Date(2024, 2, 5)
  }
];

function App() {
  return (
    <div>
      <NewExpense />
      <Expenses items={dummy_data}/>
    </div>
  );
}

export default App;

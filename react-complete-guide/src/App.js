import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Pizza',
      amount: 5,
      date: new Date(2022,1,2),
    },
    {
      id: 'e2',
      title: 'Pasta',
      amount: 1,
      date: new Date(2022,1,3),
    },
    {
      id: 'e3',
      title: 'Burger',
      amount: 1.5,
      date: new Date(2022,1,4),
    },
    {
      id: 'e4',
      title: 'fish & chips',
      amount: 3,
      date: new Date(2022,1,5),
    },
  ]

  return (
    <div>
      <h2>Lets come some react.js stuff</h2>
      <ExpenseItem title={expenses[0].title} 
                   amount={expenses[0].amount} 
                   date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} 
                   amount={expenses[1].amount} 
                   date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} 
                   amount={expenses[2].amount} 
                   date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[3].title} 
                   amount={expenses[3].amount} 
                   date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

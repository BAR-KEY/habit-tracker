import React, { useState } from 'react';
import './app.css';
import Navbar from './components/navbar'
import Habits from './components/habits'


function App() {
  const [count, setCount] = useState(0);

  const [habit, setHabbit] = useState([
  {
    id: 1,
    text: 'Coding',
    count: 0,
  },
  {
    id: 2,
    text: 'Eating',
    count: 0,
  },
  {
    id: 3,
    text: 'Running',
    count: 0,
  }
])
const onIncrease = () => {
  setHabbit(habit=>habit.count+1)
}    
const onDecrease = () => {
  setHabbit(habit=>habit.count>0?habit.count-1:habit.count)
}    
  return (
    <div className="App">
      <Navbar></Navbar>
      <Habits habit={habit} Increase={onIncrease} decrease={onDecrease}></Habits>
    </div>
  );
}

export default App;

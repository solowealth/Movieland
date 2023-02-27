import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const Person = (props) => {
    return (
      <>
        <h1>name: {props.name}</h1>
        <h1>lastName: {props.lastName}</h1>
        <h1>age: 17 {props.age}</h1>
      </>
    )
  }

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert('reload')
  }, [])
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>

      <Person name= 'Ada' lastName = 'Juliet'/>
      <Person />
    </div>
  );
}

export default App;
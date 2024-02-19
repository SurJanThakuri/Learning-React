import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

 // let counter = 15;

  const addValue = () =>{
    setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter == 0){
      return;
    }
    else{setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button 
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App

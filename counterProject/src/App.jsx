import { useState } from 'react'    
import './App.css'

function App() {

  const [counter, setCounter ] = useState(15)

  // let counter = 5

  const addValue = () => {

    console.log(counter);
    setCounter(counter + 1)

  } 

  const removeValue = () => {
    
    setCounter(counter - 1)

  }

  return (
    
    <>
     <h1>Chai or React</h1>
     <h2>Counter value: {counter}</h2>

     <button className='btn'
    onClick={addValue}>
      Add value
      {counter}
     </button>

     <button className='btn'
     onClick={removeValue}
     >
      Remove value {counter}
     </button>
    </>
  )
}

export default App

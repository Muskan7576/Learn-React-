import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter] = useState(15)
// let counter = 15

//if write counter = counter+1 4 times then it will not work because react will not re-render the component because it does not know that the value of counter has changed. so we have to use setCounter to change the value of counter and re-render the component.
//we can use like - 
//setCounter(prevCounter => prevCounter + 1)  //this will work because it will re-render the component and update the value of counter. 

// *****THIS IS VERY IMPOTANT FOR INTERVIEWS***** 

const addVal = () =>{

  counter = counter + 1;
  setCounter(counter)
}
const removeVal = () => {
  counter = counter - 1;
  setCounter(counter)
}
  return (
    <>
      <h1>React Learning</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addVal}> Add Value</button>

      <button
      onClick={removeVal}>Remove Value</button>
    </>
    
  )
}

export default App
 
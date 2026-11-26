import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="bg-green-400 p-4 rounded-xl text-center">Tailwind Test</h1>
     
     <Card username="John Doe" btnText="Click Me" /> 
        <Card username="Jane Smith" btnText="Visit Me" /> 

    </>
  )
}

export default App

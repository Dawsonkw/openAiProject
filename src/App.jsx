import { useState } from 'react'
import './App.css'
import ApiComponent from './components/ApiComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        
        <h1 className='flex justify-center text-bold text-3xl text-red-700 '>AI Playground</h1>
        <p className='flex justify-center'>This is a working model to test the capabilities of the OpenAI platform utilizing the OpenAI API</p>
      </div>
      <div>
      <ApiComponent />
        
      </div>
        
    </div>
  )
}

export default App


// Here's a good source for example of getting the api going
// https://www.youtube.com/watch?v=oacBV4tnuYQ


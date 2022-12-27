import { useState } from 'react'
import './App.css'
import ApiComponent from './components/ApiComponent'
import ImageApiCaller from './components/ImageApiCaller'

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
      <div>
        <ImageApiCaller />  
      </div>
        
    </div>
  )
}

export default App


// So here's the thing, you got one working api, now lets build another component that makes a call to the Image api endpoint and then we're gona resolve it in a separate area. Basically clone the original apicomponent and replace the endpoints / update whatever. 


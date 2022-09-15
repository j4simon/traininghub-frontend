import './App.css';
import { useState, useEffect } from 'react'
import Modules from './components/Modules'

function App() {
  const [state, setState] = useState([])

  useEffect(() => {

    console.log('useEffect Ran!')
    fetch('http://localhost:8000/api/training/')
      .then(res => res.json())
      .then(res => {
        setState(res)
        return res
      }).then(res => console.log(res))
  }, [])

  return (
    <div className="App">
      <h1>Hello, React!</h1>
      <Modules trainings={state} />
    </div>
  );
}

export default App;

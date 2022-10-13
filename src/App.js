import './App.css';

import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Trainings from './components/Trainings'
import TrainingForm from './components/TrainingForm'
import Training from './components/Training'
import Layout from './components/Layout'
import Footer from './components/Footer'
import Home from './pages/Home';
import TrainingDetails from './pages/Details'
import Navbar from './components/Navbar'

function App() {


  const [state, setState] = useState([])
  // const [user, setUser] = useState()
  useEffect(() => {

    console.log('useEffect Ran!')
    fetch('http://localhost:8000/training/')
      .then(res => res.json())
      .then(res => {
        setState(res)
        return res
      }).then(res => console.log(res))
  }, [])

  // const updateTrainingState = (id) => {
  //   setState(state.filter(training => training._id !== id))
  // }

  return (
    <div>
      {/* // <Layout user={user} setUser={setUser}> */}
      {/* <Routes>
        <Route path='/' element={<Home training={state} updateTrainingState={updateTrainingState} user={user} />} /> */}
      {/* <h1>Punny Name TBD</h1> */}
      <Navbar />
      <Routes>
        <Route forceRefresh={true} path='/training' element={<Trainings trainings={state} />} />
        <Route path='/training/:id' element={<TrainingDetails />} />
        <Route path='/training/new' element={<TrainingForm />} />
      </Routes>
      {/* <Modules trainings={state} /> */}
      {/* <TrainingForm trainings={state} /> */}
      {/* <Training trainings={state} /> */}
      <Footer />
      {/* </Routes> */}
      {/* // </Layout> */}
    </div>
  );
}

export default App;

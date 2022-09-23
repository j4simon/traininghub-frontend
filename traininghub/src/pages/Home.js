import React, { useState } from 'react'
import styled from 'styled-components'
import Trainings from '../components/Trainings'

const HomeContainer = styled.div`
    padding: 20px;

`

const Home = () => {
    const [state, setState] = useState({
        title: "",
        details: ""

    })

    return (
        <HomeContainer>
            <h2>Training Modules</h2>
            <Trainings trainings={state} />
        </HomeContainer>
    )
}

export default Home
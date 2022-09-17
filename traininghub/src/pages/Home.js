import React from 'react'
import styled from 'styled-components'
import Training from '../components/Training'

const Home = ({ training, updateTrainingState, user }) => {
    return (
        <div>
            <Training training={training} updateTrainingState={updateTrainingState} user={user} />
        </div>
    )
}

export default Home
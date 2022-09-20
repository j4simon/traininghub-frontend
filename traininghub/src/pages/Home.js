import React from 'react'
import styled from 'styled-components'
import Modules from '../components/Modules'

const Home = ({ training }) => {
    return (
        <div>
            <Modules training={training} />
        </div>
    )
}

export default Home
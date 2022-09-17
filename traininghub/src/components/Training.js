import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// const Training = ({ number, trainings }) => {
const Training = () => {
    const [state, setState] = useState([])

    useEffect(() => {

        console.log('Training UseState')
        fetch('http://localhost:8000/training/')
            .then(res => res.json())
            .then(res => {
                setState(res)
                return res
            }).then(res => console.log(res))
    }, [])

    return (


        <div className="Training">

            <div className='title'>{state[0]?.title}</div>
            <div className='description'>{state[0]?.description}</div>
            <div className='category'>{state[0]?.category}</div>
            <a href={state[0]?.training_link}>Link</a>

        </div >
    )
}

export default Training
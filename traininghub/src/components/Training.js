import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// const Training = ({ number, trainings }) => {
const Training = (props) => {
    const [state, setState] = useState([])

    // useEffect(() => {

    //     console.log('Training UseState')
    //     fetch('http://localhost:8000/training/')
    //         .then(res => res.json())
    //         .then(res => {
    //             setState(res)
    //             return res
    //         }).then(res => console.log(res))
    // }, [])

    return (


        <div className="Training">
            <div>{props?.title}</div>
            <div>- {props?.details}</div>

            {/* <div className='title'> {state[0]?.title}</div>
            <div className='description'> {state[0]?.details}</div> */}

        </div >
    )
}

export default Training
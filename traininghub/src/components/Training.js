import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// const Training = ({ number, trainings }) => {
const Training = (props) => {
    const [state, setState] = useState([])


    return (


        <div className="Training" key="id">
            <br />
            <h2>{props?.title}</h2>
            {/* <h3>- {props?.details}</h3> */}
            <Link to={`/training/${props?.id}`}>Details</Link>



        </div >
    )
}

export default Training
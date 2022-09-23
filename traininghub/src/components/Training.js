import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TrainingContainer = styled.div`
    display: flex;
    border-bottom: 1px solid lightgrey;


    h3 {
        padding-right: 5px;
        padding-top: 5px;
    }

    a {
        padding-left: 4px;
        padding-right: 4px;
        text-decoration: none;
        outline: 1px solid;
        color: #aa104f;
        border-radius: 5px;
        align-self: center;
    }

`

const Training = (props) => {
    // const [state, setState] = useState([])


    return (


        <TrainingContainer className="Training" key="id">
            <br />
            <h3>{props?.title} - </h3>
            {/* <h3>- {props?.details}</h3> */}
            <Link to={`/training/${props?.id}`}>See Details</Link>


        </TrainingContainer >
    )
}

export default Training
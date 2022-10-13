import React from 'react'
import Training from './Training'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TrainingsContainer = styled.div`

    h2 {
        padding: 20px;
        background-color: #da8ee7;
        margin: 0 auto;
        text-align: center;
        color: purple;
        border: 0;
    }

`

const Trainings = (props) => {


    return (
        <TrainingsContainer>
            <h2>Training Modules</h2>
            {props.trainings.map(t => {
                return <Training title={t.title} details={t.details} key={t.id} id={t.id} />



            })}

        </TrainingsContainer>
        // <main>
        //     <div>
        //         <h3>Training Modules</h3>
        //         <table>
        //             <thead>
        //                 <tr>
        //                     <th>Title</th>
        //                     <th>Details</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {props.trainings?.map(() => {
        //                     return <Training />

        //                 })}
        //             </tbody>
        //         </table>
        //     </div>
        // </main>


    )
}

export default Trainings
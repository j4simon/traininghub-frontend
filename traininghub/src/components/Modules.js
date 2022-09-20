import React from 'react'
import Training from './Training'
import { Link } from 'react-router-dom'

const Modules = (props) => {


    return (
        <div>
            <h1>Trainings</h1>
            {props.trainings.map(t => {
                return <Training title={t.title} details={t.details} key={t.id} id={t.id} />



            })}

        </div>
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

export default Modules
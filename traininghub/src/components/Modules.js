import React from 'react'
import Training from './Training'
import { Link } from 'react-router-dom'

const Modules = (props) => {


    return (
        <main>
            <div>
                <h3>Training Modules</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.trainings?.map((record, id) => {
                            return <Training record={record} key={id} />

                        })}
                    </tbody>
                </table>
            </div>
        </main>


    )
}

export default Modules
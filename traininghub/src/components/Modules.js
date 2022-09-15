import React from 'react'
import Training from './Training'
import { Link } from 'react-router-dom'

const Modules = (props) => {


    return (
        <div>
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
                                // return <Training record={record} key={id} />
                                <Link to={`/training/details/${record.title}`}>
                                    <Training title={record.title} />
                                </Link>
                            })}
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}

export default Modules
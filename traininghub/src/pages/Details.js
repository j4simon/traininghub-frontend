import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'



const TrainingDetails = ({ props }) => {
    let { id } = useParams();
    const [training, setTraining] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/training/${id}`)
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                setTraining(json);
            })
            .catch(err => {
                console.log("There was a problem", err);
            })
    }, [id]);


    return (
        <div className="details-container">
            <div className="details">
                <h2>{training.title}</h2>
                <h3>{training.details}</h3>
            </div>

        </div>
    )
}

export default TrainingDetails
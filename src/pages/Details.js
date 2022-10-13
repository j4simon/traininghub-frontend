import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'


const DetailsComponent = styled.div`
    margin: 15px;
    background-color: lightpink;

`


const TrainingDetails = ({ props }) => {
    const navigate = useNavigate()

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

    const handleChange = (e) => {
        console.log("Target is " + e.target.name)
        setTraining({
            ...training, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch(`http://localhost:8000/training/${id}/`, {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(training)
            })
        } catch (error) {
            console.log(error.message)
        }
        navigate('/training')
    }
    const trainingDelete = async (e) => {
        e.preventDefault()
        try {
            await fetch(`http://localhost:8000/training/${id}/`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(training)
            })
        } catch (error) {
            console.log(error.message)
        }
        navigate('/training')
    }

    return (
        <DetailsComponent>

            <form onSubmit={handleSubmit} encType="multipart/form-data" className="lbox">
                <input
                    id="status_body"
                    name="title"
                    type="text"
                    className="linput"
                    value={training.title}
                    onChange={handleChange}
                />
                <input
                    className="linput"
                    id="details"
                    name="details"
                    type="text"
                    value={training.details}
                    onChange={handleChange}
                />

                <button type="submit" className="formControl">Edit Training</button>
                <button onClick={trainingDelete}>Delete</button>
            </form>

            {/* <div className="details-container">
                <div className="details">
                    <h2>{training.title}</h2>
                    <h3>{training.details}</h3>
                </div>
            </div> */}
        </DetailsComponent>
    )
}

export default TrainingDetails
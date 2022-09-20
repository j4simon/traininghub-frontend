import React, { useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'

const TrainingForm = () => {
    const [state, setState] = useState({
        title: "",
        details: "",

    })

    const navigate = useNavigate()
    // const [state, setState] = useState([])

    const handleChange = (e) => {
        console.log("Target is " + e.target.name)
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await fetch("http://localhost:8000/training/", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(state)
            })
        } catch (error) {
            console.log(error.message)
        }
        navigate('/training')
    }

    // let deleteTraining = (req, res) => {

    // }

    return (
        <div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="lbox">
                <input
                    id="status_body"
                    name="title"
                    type="text"
                    className="linput"
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    className="linput"
                    id="details"
                    name="details"
                    type="text"
                    placeholder="Details"
                    onChange={handleChange}
                />

                <button type="submit" className="formControl">Add Training </button>

            </form>

        </div>
    )
}

export default TrainingForm
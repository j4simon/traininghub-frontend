import React, { useState } from 'react'

const TrainingForm = () => {
    const [state, setState] = useState({
        title: "",
        details: ""
    })
    // const [state, setState] = useState([])

    const handleChange = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("http://localhost:8000/training/", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(module)
            })
        } catch (error) {
            console.log(error.message)
        }
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
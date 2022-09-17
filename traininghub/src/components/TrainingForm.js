import React, { useState } from 'react'

const TrainingForm = () => {
    const [module, setModule] = useState({
        title: "",
        details: ""
    })

    const handleChange = (e) => {
        setModule({
            ...module, [e.target.name]: e.target.value
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


                <button id="new" type="submit" className="signupbutton">Add Training </button>

            </form>

        </div>
    )
}

export default TrainingForm
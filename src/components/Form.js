import React from "react";
import './forms.css'

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            comment:"",
            isFriendly: true,
            employment: "",
            favColor: "",
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : type==='checkbox' ? checked : value
            }
        })

    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input
                type="text"
                onChange={handleChange}
                name='firstname'
                value={FormData.firstname}
            />
            <label>Last Name</label>
            <input
                type="text"
                onChange={handleChange}
                name='lastname'
                value={FormData.lastname}
            />
            <label>Email</label>
            <input
                type="text"
                onChange={handleChange}
                name='email'
                value={FormData.emailname}
            />
            <label>Enter comment</label>
            <textarea
                onChange={handleChange}
                name="comment"
                value={formData.comment}
            />
            <input
                type="checkbox"
                onChange={handleChange}
                name= "isFriendly"
                checked={formData.isFriendly}
            />

            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />

            <fieldset>
                <legend>Current employment status</legend>

                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            <select
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button>submit</button>

        </form>
    )
}
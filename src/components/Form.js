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
            employment: ""
        }
    )

    console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name] : type==='checkbox' ? checked : value
            }
        })

    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name='firstname'
                value={FormData.firstname}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name='lastname'
                value={FormData.lastname}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name='email'
                value={FormData.emailname}
            />
            <textarea
                placeholder="Enter comment"
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
        </form>
    )
}
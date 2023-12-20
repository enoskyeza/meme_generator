import React from "react";
import './forms.css'

export default function Form() {

    const [formData, setFormData] = React.useState(
        {
            firstname:"",
            lastname:"",
            email:"",
            comment:"",
            isFriendly: true
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
        </form>
    )
}
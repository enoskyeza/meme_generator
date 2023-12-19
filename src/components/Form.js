import React from "react";
import './forms.css'

export default function Form() {


    const [formData, setFormData] = React.useState({
        firstname:"", lastname:"", email:""
    })

    function handleChange(event) {
        console.log('input changed')
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

        </form>
    )
}
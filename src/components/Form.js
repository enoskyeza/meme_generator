import React from "react";
import './forms.css'

export default function Form() {


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
        </form>
    )
}
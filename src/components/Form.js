import React from "react";
import './forms.css'

export default function Form() {

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
import React from "react";
import "@/components/SignupForm.css"

export default function SignupForm(){
    return(
        <div className="form-bg">
            <input
                type="text"
                placeholder="Email address"
            />
            <input
                type="text"
                placeholder="Password"
            />
            <input
                type="text"
                placeholder="Confirm Password"
            />
            <input
                type="checkbox"
            />
            <label htmlFor="subscirbe">I want to join the newsletter</label>

            <br/>
            <button>Sign Up</button>
        </div>
    )
}
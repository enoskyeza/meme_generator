import React from "react";
import "@/components/SignupForm.css"

export default function SignupForm(){
    return(
        <div className="main-container" >
            <form className="form-bg">
                <div className="input-section">
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
                </div>
                <div className="checkbox-input">
                    <input
                        className=""
                        type="checkbox"
                    />
                    <label htmlFor="subscirbe">I want to join the newsletter</label>
                </div>
                <button>Sign Up</button>
            </form>
        </div>
    )
}
import React from "react";
import "@/components/SignupForm.css"

export default function SignupForm(){

    const [formData, setformData] = React.useState(
        {
            email:"",
            password1:"",
            password2:"",
            subscribe: false,
        }
    )

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)

    }

    function handleInput(event) {
        // console.log(value, name)
        const {name, value} = event.target
        setformData(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    return(
        <div className="main-container" >
            <form onSubmit={handleSubmit} className="form-bg">
                <div className="input-section">
                    <input
                        name="email"
                        type="text"
                        placeholder="Email address"
                        onChange={handleInput}
                        value={formData.email}
                    />
                    <input
                        onChange={handleInput}
                        name="password1"
                        value={formData.password1}
                        type="text"
                        placeholder="Password"
                    />
                    <input
                        onChange={handleInput}
                        name="password2"
                        value={formData.password2}
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
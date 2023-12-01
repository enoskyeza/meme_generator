import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    return (
        <div className="jokes-div">
            {props.setup && <h3>{props.setup}</h3>}
            <p>{props.punchline}</p>
            <button>Show punchline</button>
            <hr />
        </div>
    )
}
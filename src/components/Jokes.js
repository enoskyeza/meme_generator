import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     * - Only display the punchline paragraph if `isShown` is true
     */


    const [isShown, setIsShown] = React.useState(false)

    function toggleShow() {
        setIsShown(prevState => !prevState)
    }

    return (
        <div className="jokes-div">
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShow}>{!isShown ? 'Show' : 'Hide'} punchline</button>
            <hr />
        </div>
    )
}
import React from "react"
import "./windowtracker.css"

export default function WindowTracker() {
    const [show, setShow] = React.useState(true)
    const [windowSize, setWindowSize]  = React.useState(window.innerWidth)

    React.useEffect(() => {
        function watchWidth(){
            console.log("Setting up...")
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', watchWidth)

        return function() {
            console.log("Cleaning up...")
            window.removeEventListener('resize', watchWidth)
        }

    }, [])

    function handleToggle() {
        setShow(prevState => !prevState)
    }

    return (
        <>
            <div className="window-container">
                <button onClick={handleToggle}>
                    Toggle WindowTracker
                </button>

                {show && <h1>Window width: {windowSize}</h1>}
            </div>
        </>
    )
}

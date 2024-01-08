import React from "react"
import "./windowtracker.css"

export default function WindowTracker() {
    const [show, setShow] = React.useState(true)
    const [windowSize, setWindowSize]  = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener('resize', function(){
            setWindowSize(window.innerWidth)
        })
    }, [windowSize])

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

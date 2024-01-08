import React from "react"
import "./windowtracker.css"

export default function WindowTracker() {
    return (
        <>
        <div className="window-container">
            <button>
                Toggle WindowTracker
            </button>

            <h1>Window width: {window.innerWidth}</h1>
        </div>
        </>
    )
}

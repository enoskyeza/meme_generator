/**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
*/

import React from "react"
import boxes from "./boxes"

export default function App() {
    const [boxArray, setBoxArray] = React.useState(boxes)
    boxElements = boxArray.map(box => {
        return <div className='box-el' key={box.id} on={box.on}></div>
    })
    return (
        <main>
            {boxElements}
        </main>
    )
}
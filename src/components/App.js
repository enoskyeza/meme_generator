'use client'

import React from "react"
import Header from "@/components/Header"
import Meme from "@/components/Meme"
import Box from "@/components/Box"
import boxes from "./boxes"
import './boxes.css'

export default function App() {

    const [boxArray, setBoxArray] = React.useState(boxes)


    function toggle(box_id) {
        setBoxArray(prevState => {
            let updatedArray = []
            let currentBox
            for (let i=0; i<prevState.length; i++ ) {
                currentBox = prevState[i]
                currentBox.id === box_id ? updatedArray.push({...currentBox, on : !currentBox.on }): updatedArray.push(currentBox)

                console.log(updatedArray)
            }

            return updatedArray
    })

    }

    const boxElements = boxArray.map(box => (
        <Box
            key={box.id}
            on={box.on}
            toggle={toggle}
            id={box.id}
        />
    )
    )
    return (
        <main>
            {/* <Header />
            <Meme /> */}
            {boxElements}
        </main>
    )
}


/* Second option for the change state function

function toggle(id) {
        setSquares(prevSquares => {
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id) {
                    const updatedSquare = {
                        ...currentSquare,
                        on: !currentSquare.on
                    }
                    newSquares.push(updatedSquare)
                } else {
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
    }

*/
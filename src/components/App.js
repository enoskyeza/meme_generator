'use client'

import React from "react"
import Header from "@/components/Header"
import Meme from "@/components/Meme"
import Box from "@/components/Box"
import boxes from "./boxes"
import './boxes.css'

export default function App() {

    const [boxArray, setBoxArray] = React.useState(boxes)

    const boxElements = boxArray.map(box => {
        return <Box on={box.on} key={box.id} />
    })


    return (
        <main>
            {boxElements}
        </main>
    )
}

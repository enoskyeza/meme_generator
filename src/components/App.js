'use client'

import React from "react"
import Header from "@/components/Header"
import Meme from "@/components/Meme"
import Box from "@/components/Box"
import boxes from "./boxes"
import './boxes.css'

export default function App() {

    const [boxArray, setBoxArray] = React.useState(boxes)


    function toggle() {
        console.log('Box clicked')
    }

    const boxElements = boxArray.map(box => {
        return <Box on={box.on} key={box.id} toggle={toggle}/>
    })
    return (
        <main>
            {boxElements}
        </main>
    )
}

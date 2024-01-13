'use client'

import React from "react"
import Header from "@/components/Header"
import Meme from "@/components/Meme"
// import Box from "@/components/Box"
// import Form from "./Form"
// import Joke from "./Jokes"
// import boxes from "./boxes"
// import jokes from "./jokesdata"
// import SignupForm from "./SignupForm"
// import UseEffectApp from "@/components/UseEffect"
// import WindowTracker from "@/components/WindowTracker"


// import './boxes.css'

export default function App() {

    return (
        <>
            <Header />
            <Meme />
        </>

    )
}


/*

export default function App() {
    // Box challenges
    const [boxArray, setBoxArray] = React.useState(boxes)

    // use declarative method => map()
    function toggle(id) {
        setBo(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }


    //jokes practices
    const [jokesArray, setJokesArray] = React.useState(jokes)

    const jokeElements = jokesArray.map(joke => (
        <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
        />
    ))

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

        <>
            <Header />
            <Meme />
        </>


        // <main>
        //    {jokeElements}
        // </main>

        // <>
        //     <Form />
        // </>

        // <>
        //     <SignupForm />
        // </>
    )
}

*/


/* First option for the change state function

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
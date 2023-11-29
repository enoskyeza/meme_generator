'use client'

import React from "react"

export default function Box(props) {
    // Local state to implement toggle
    // const[on, setOn] = React.useState(props.on)

    // function handleClick() {
    //     setOn(prevState => !prevState)
    // }

    // Add dynamic styles
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }


    // onClick={() => props.toggle(props.id)}   //Pass a callback function to pass the object id
    return (
        <>
            <div style={styles} className='box-el' onClick={() => props.toggle(props.id)}></div>
        </>
    )
}


/**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
*/

/**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
*/

/**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     *
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     *
     * Goal: clicking each box should toggle it on and off.
*/
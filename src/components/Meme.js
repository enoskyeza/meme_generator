'use client'
import React from "react"
import memesData from "./memesData.js"
import './Main.css'
import react from "react"

export default function Meme() {


/**
     * Challenge:
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     *
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     *
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     *
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
*/
    const [allMemes, setAllMemes] = React.useState({})

    React.useEffect(function() {
        console.log("data rendered")
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))}, []
    )

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name] : value,
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme meme-container">
                <h3 className="meme--text top top-text">{meme.topText}</h3>
                <h3 className="meme--text bottom bottom-text">{meme.bottomText}</h3>
                <img src={meme.randomImage} className="meme--image" />
            </div>
        </main>
    )
}



    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     *
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     *
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     *
     * Lastly, update the `getMemeImage` function and the markup
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
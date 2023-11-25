'use client';
import React from "react";
import "./Main.css";

export default function Meme() {

    function getMemeImage() {
        console.log ('BUtton clicked!')
    }

  return (
    <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
  );
}

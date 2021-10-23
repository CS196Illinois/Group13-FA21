import React from "react";

import './Board.css';

const verticalaxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];
const horizontalaxis = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];

export default function board() {
    let board = [];

    for(let j = verticalaxis.length - 1; j >= 0; j--) {
        for(let i = 0; i < horizontalaxis.length; i++) {
            const number = i + j + 2;
            // choosing what we display on board here
            if(number % 2 === 0) {
                board.push(
                    <div className = "tile grass-tile"></div>
                );
            } else {
                board.push(
                    <div className = "tile grass-tile"></div>
                );
            }

        }
    }
    return <div id= "board">{board}</div>;
}

// react components must be capital 
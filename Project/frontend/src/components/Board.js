import React, { useEffect, useState } from "react";

import './Board.css';

const verticalaxis = 20;
const horizontalaxis = 20;
// animals is a 2-d array, pass w values 0,1,2,3,4,5
let animals = Array(verticalaxis).fill().map(() => Array(horizontalaxis).fill(0));
// animals[1][1] = 1

// wait in js is... set time out

export default function Board({playbackData, frame}) {
    const [Animals, setAnimals] = useState(
        Array(verticalaxis).fill().map(() => Array(horizontalaxis).fill(0))
    );
    let aniState = Array(verticalaxis).fill().map(() => Array(horizontalaxis).fill(0));
    if (playbackData[frame]) {
        
        console.log(playbackData[frame][0]);
        for (let i = 0; i < playbackData[frame].length; i++) {
            console.log(playbackData[frame][i].position.x);
            // console.log(animal.position.x)
            aniState[playbackData[frame][i].position.x][playbackData[frame][i].position.y] = 2;
            console.log(aniState);
        }  
        
    }
    useEffect(() => {
        setAnimals(aniState);  
        console.log(Animals);
    }, [frame])

    let board = [];
    for(let j = verticalaxis - 1; j >= 0; j--) {
        for(let i = 0; i < horizontalaxis; i++) {

            if (Animals[i][j] === 0) {
                board.push(
                    <div className = "tile grass-tile"></div>
                );
            }
            // Grass only ^

            if (Animals[i][j] === 1) {
                board.push(
                    <div className = "tile grass-tile">
                        <div className = "tile prey-tile">

                        </div>
                    </div>
                );
            } // Prey & grass ^
            if (Animals[i][j] === 2) {
                board.push(
                    <div className = "tile grass-tile">
                        <div className = "tile predator-tile">

                        </div>
                    </div>
                );
            } 
            //  Predator & grass ^
            if (Animals[i][j] === 3) {
                board.push(
                    <div className = "tile dirt-tile"></div>
                );
            }
            // Dirt only ^
            if (Animals[i][j] === 4) {
                board.push(
                    <div className = "tile dirt-tile">
                        <div className = "tile prey-tile">

                        </div>
                    </div>
                );
            }
            // Prey and dirt ^
            if (Animals[i][j] === 5) {
                board.push(
                    <div className = "tile dirt-tile">
                        <div className = "tile predator-tile">
                        </div>
                    </div>
                );
            }
            // Predator and dirt ^
        }
    }
    return <div id= "board">{board}</div>;
}
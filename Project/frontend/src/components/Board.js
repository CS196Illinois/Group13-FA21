import React from "react";

import './Board.css';

const verticalaxis = 20;
const horizontalaxis = 20;
// animals is a 2-d array, pass w values 0,1,2,3,4,5
let animals = Array(verticalaxis).fill().map(() => Array(horizontalaxis).fill(0));
animals[1][1] = 1
animals[18][5] = 2
animals[1][2] = 3
animals[11][4] = 4
animals[12][6] = 5

animals[0][7] = 1
animals[3][3] = 2
animals[6][13] = 3
animals[18][17] = 4
animals[8][1] = 5



export default function board() {
    let board = [];
    for(let j = verticalaxis - 1; j >= 0; j--) {
        for(let i = 0; i < horizontalaxis; i++) {

            if (animals[i][j] === 0) {
                board.push(
                    <div className = "tile grass-tile"></div>
                );
            }
            // Grass only ^

            if (animals[i][j] === 1) {
                board.push(
                    <div className = "tile grass-tile">
                        <div className = "tile prey-tile">

                        </div>
                    </div>
                );
            } // Prey & grass ^
            if (animals[i][j] === 2) {
                board.push(
                    <div className = "tile grass-tile">
                        <div className = "tile predator-tile">

                        </div>
                    </div>
                );
            } 
            //  Predator & grass ^
            if (animals[i][j] === 3) {
                board.push(
                    <div className = "tile dirt-tile"></div>
                );
            }
            // Dirt only ^
            if (animals[i][j] === 4) {
                board.push(
                    <div className = "tile dirt-tile">
                        <div className = "tile prey-tile">

                        </div>
                    </div>
                );
            }
            // Prey and dirt ^
            if (animals[i][j] === 5) {
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
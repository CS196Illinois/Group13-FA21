
   
import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import Board from './components/Board';
import SliderPredator from './components/SliderPredator';
import SliderPrey from './components/SliderPrey';
import Graph from './components/Graph';

// was
//const App = () => {  .... for the funciton app


function App() {



  const [initialData, setInitialData] = useState({
      "0": [{
            id: "thing",
            type: "predator",
            position: {
              x: 0,
              y: 0,
            }
            },
           ],
      "1": [{
          id: "two",
          type: "predator",
          position: {
            x: 15,
            y: 11,
            }
            },
           ],
           "2": [{
            id: "three",
            type: "predator",
            position: {
              x: 7,
              y: 21,
              }
              },
             ]  

              


  })
  const [Playing, setPlaying] = useState(false)
  const [frame, setFrame] = useState(0)
  const frameRef = useRef(0)
  const [intervalID, setIntervalID] = useState()


  useEffect(() => {

    if (!Playing) {
    const IntID = setInterval(() => {
    console.log("frame time")
    setFrame(frame + 1)}, 1000);
    if (frame > Object.keys(initialData).length) {
      setPlaying(!Playing);
      clearInterval(IntID);
    }
    return () => clearInterval(IntID);
    } 

  });

  // useEffect(() => {
  //   setFrame(frameRef.current)
  //   console.log(frame)
  // });

  function handleStart() {
    setPlaying(!Playing)
    // if (!Playing) {
    //   setIntervalID(setInterval(() => {
    //     console.log("frame time")
    //     console.log(frameRef)
    //     frameRef.current++}, 1000));
    // } else {
    //   clearInterval(intervalID);
    // }

  }
  
  // setInitialData({
  //   "0": [[1, (5,5)], [2, [5,7]]],
  //   "1": [[1, (6,4)], [2, [6,8]]]

  // })

  // useEffect(()=> {
  //   fetch('/test').then(
  //     response => response.json()
  //   ).then(data => setInitialData(data))
  // },[]);


  // for prey
  const [rangeValue, setRangeValue] = useState(10);

  const onChangeSlider = e => {
    setRangeValue(parseInt(e.target.value, 10));
  }

// for predator
  const [rangeValuep, setRangeValuep] = useState(30);

  const onChangeSliderp = ep => {
    setRangeValuep(parseInt(ep.target.value, 10));
  }

  return (

    <div id="app">
      <h1>{initialData.data}</h1>
      <Board
          playbackData = {initialData}
          start = {Playing}
          frame = {frame}
      
      />
      <button class="button buttonstart" onClick = {handleStart}>Start</button>
      <p>Prey Starting Population</p>      
      <SliderPrey
          min={0}
          max={100}
          step={1}
          defaultLength={rangeValue}
          value={rangeValue}
          onChangeValue={onChangeSlider}
          linearGradientColor="#4aa1f3"
          rangeBackgroundColor="#d7dcdf"
          sliderThumbColor="#4aa1f3"
        />
      <p>Predator Starting Population</p>           
      <SliderPredator
          min={0}
          max={100}
          step={1}
          defaultLength={rangeValuep}
          value={rangeValuep}
          onChangeValuep={onChangeSliderp}
          linearGradientColor="#e8137a"
          rangeBackgroundColor="#d7dcdf"
          sliderThumbColor="#e8137a"
        />
      <Graph/>        
    </div>    
  );  
}

export default App;
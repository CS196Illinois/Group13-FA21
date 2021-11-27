
   
import React, { useEffect, useState } from 'react';

import './App.css';
import Board from './components/Board';
import SliderPredator from './components/SliderPredator';
import SliderPrey from './components/SliderPrey';
import Graph from './components/Graph';

// was
//const App = () => {  .... for the funciton app


function App() {

  const [initialData, setInitialData] = useState([{}])

  useEffect(()=> {
    fetch('/test').then(
      response => response.json()
    ).then(data => console.log(data))
  });

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
      <Board/>
      <button class="button buttonstart">Start</button>
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
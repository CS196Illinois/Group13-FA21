import logo from './logo.svg';
import './App.css';
// import recharts
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// Going to make up some data
const data = [
  {
    name: 'Day0',
    Rabbits: 3000,
    Wolves: 400,
    amt: 2400,
  },
  {
    name: 'Day1',
    Rabbits: 2500,
    Wolves: 600,
    amt: 2210,
  },
  {
    name: 'Day2',
    Rabbits: 2000,
    Wolves: 1000,
    amt: 2290,
  },
  {
    name: 'Day3',
    Rabbits: 1000,
    Wolves: 700,
    amt: 2000,
  },
  {
    name: 'Day4',
    Rabbits: 1200,
    Wolves: 600,
    amt: 2181,
  },
  {
    name: 'Day5',
    Rabbits: 2000,
    Wolves: 500,
    amt: 2500,
  },
  {
    name: 'Day6',
    Rabbits: 2100,
    Wolves: 600,
    amt: 2100,
  },
];


// export 
// export default function App() {
//   return (
    
//   );
// }


function App() {
  return (
    <><LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 10,
        right: 0,
        left: 0,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Rabbits"
        stroke="#8884d8"
        activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Wolves" stroke="#82ca9d" />
    </LineChart>
    
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div></>
  );
}

export default App;
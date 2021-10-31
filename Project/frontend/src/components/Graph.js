
// import recharts
//import React, { PureComponent } from 'react';
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


function Graph() {
  return (
    <><LineChart
      width={600}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 10,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="white" style={{
        fontSize: '1rem', }}/>
      <YAxis stroke="white" style={{
        fontSize: '1rem', }}/>
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Rabbits"
        stroke="#4aa1f3"
        activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Wolves" stroke="#e8137a" />
    </LineChart>
    </>
  );
}

export default Graph;
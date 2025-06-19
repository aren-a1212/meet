import React, { useState, useEffect, useMemo } from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    Legend,
ResponsiveContainer,
} from  "recharts";
 

const colors = ['#DD0000', '#00DD00', '#0000DD', '#DDDD00', '#DD00DD'];
const EventGenresChart = ({events= []}) => {
const [data, setData]= useState([]);
const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];




  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      };
    })
    return data;
  };
  
 
  useEffect(() => {
    setData(getData());
  }, [events]);

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
         fill="#fff"
        fontSize={12}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };
  
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Pie
        data={data}
        dataKey="value"
        fill="#8884d8"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100} >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
           <Tooltip formatter={(value) => `${value} events`} />
           <Legend
          verticalAlign="bottom"
          layout="horizontal"
          align="center"
          iconSize={10}
          wrapperStyle={{ paddingTop: '10px' }}
        />
        
      </PieChart>
    </ResponsiveContainer>
   
);
}



export default EventGenresChart;
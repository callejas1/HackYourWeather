import React from 'react';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from 'recharts';

export const Chart = ({ forecast }) => {
  const { city, list } = forecast;
  const { name, country } = city;

  return (
    <>
      <h3>
        {name}, {country}
      </h3>
      <LineChart
        fill="none"
        width={700}
        height={500}
        data={list}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="dt_txt" />
        <YAxis dataKey="main.temp" />
        <Tooltip />
        <CartesianGrid stroke="#BBBBC4" key="grid" />
        <Line
          type="monotone"
          dataKey="main.temp"
          stroke="#8f00ff"
          yAxisId={0}
        />
      </LineChart>
    </>
  );
};

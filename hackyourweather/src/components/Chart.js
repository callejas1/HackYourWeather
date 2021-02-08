import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

export const Chart = ({ forecast }) => {
  const { city, list } = forecast;
  const { name, country } = city;

  return (
    <>
      <h2>
        {name}, {country}
      </h2>
      <AreaChart
        data={list}
        width={700}
        height={500}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="dt_txt" />
        <YAxis dataKey="main.temp" />
        <Tooltip />
        <CartesianGrid
          verticalFill={['#fff', '#eee']}
          fillOpacity={0.2}
          strokeDasharray="3 3"
        />
        <Area
          type="monotone"
          dataKey="main.temp"
          fill="#89cff0"
          stroke="#81C3F8"
        />
      </AreaChart>
    </>
  );
};

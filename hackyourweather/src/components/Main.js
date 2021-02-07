import React from 'react';

export const Main = ({ weatherData }) => {
  const { main, coord } = weatherData;
  return (
    <div className="main-details">
      <p>min temp: {main.temp_min}</p>
      <p>max temp: {main.temp_max}</p>
      <p>
        location: {coord.lon}, {coord.lat}
      </p>
    </div>
  );
};

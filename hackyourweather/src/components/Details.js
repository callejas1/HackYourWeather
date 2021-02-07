import React from 'react';

export const Details = ({ weatherData }) => {
  const { weather } = weatherData;
  return (
    <div className="main-details">
      <h4>{weather[0].main}</h4>
      <h5>{weather[0].description}</h5>
    </div>
  );
};

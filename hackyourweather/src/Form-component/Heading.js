import React from 'react';

export default function Heading({ weatherData }) {
  const { name, sys } = weatherData;
  return (
    <h2 className="main-details">
      {name}, {sys.country}
    </h2>
  );
}

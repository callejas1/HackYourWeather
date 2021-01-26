import React from 'react';
import Heading from './Heading';
import Main from './Main';
import Details from './Details';

export default function CityCard({ weatherData }) {
  return (
    <div className="card-style">
      <Heading weatherData={weatherData} />
      <Details weatherData={weatherData} />
      <Main weatherData={weatherData} />
    </div>
  );
}

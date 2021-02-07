import React from 'react';
import { Link } from 'react-router-dom';

export const Heading = ({ weatherData }) => {
  const { name, sys } = weatherData;
  return (
    <h2 className="main-details">
      <Link to={`/${weatherData.id}`}>
        {name}, {sys.country}
      </Link>
    </h2>
  );
};

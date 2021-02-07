import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Chart } from './Chart';

export const WeatherChart = () => {
  const { cityId } = useParams();
  const [forecast, setForecast] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchWeekForecast = async () => {
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const URL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${API_KEY}&units=metric`;
      try {
        setLoading(true);
        const getData = await fetch(URL);
        const response = await getData.json();
        setForecast(response);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchWeekForecast();
  }, [cityId]);

  return (
    <div>
      <h1>5 Day Forecast</h1>
      {!error && !isLoading && forecast.length !== 0 ? (
        <Chart forecast={forecast} />
      ) : (
        !isLoading && !error && <p>Something happened</p>
      )}
      <Link to="/">Go Back!</Link>
    </div>
  );
};

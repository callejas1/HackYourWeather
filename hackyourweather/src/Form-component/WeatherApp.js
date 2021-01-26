import React, { useState, useEffect } from 'react';
import CityCard from './CityCard';
import Form from './Form';

export default function WeatherApp() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getWeather = async () => {
    try {
      const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
      const WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
      setError(null);
      setIsLoading(true);
      const res = await fetch(WEATHER_URL);
      if (res.status !== 200) {
        throw new Error('Please enter a valid city name and try again');
      }
      const data = await res.json();
      setWeatherData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  useEffect(() => {}, [weatherData]);

  return (
    <div>
      <Form
        cityName={cityName}
        getWeather={getWeather}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {error && <p className="error-message">{error}</p>}
      {isLoading && !error && <p>Loading...</p>}
      {!error && !isLoading && Object.keys(weatherData).length > 0 ? (
        <div>
          <CityCard weatherData={weatherData} />
        </div>
      ) : (
        !isLoading &&
        !error && <p className="enter-city">Enter a city name ⛅ </p>
      )}
    </div>
  );
}

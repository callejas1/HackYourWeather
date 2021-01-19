import { Heading } from './WeatherHeading';
import { Details } from './WeatherDetails';
import { Main } from './WeatherMain';
const cityWeather = require('./city-weather.json');

export const weatherInstance = cityWeather.map((city) => {
  const cardStyle = {
    width: 400,
    marginTop: 60,
    border: '2px solid #000',
  };
  return (
    <div style={cardStyle}>
      <Heading heading={city.name + ', ' + city.sys.country} />
      <Details
        main={city.weather[0].main}
        description={city.weather[0].description}
      />
      <Main
        min={city.main.temp_min}
        max={city.main.temp_max}
        location={city.coord.lon + ', ' + city.coord.lat}
      />
    </div>
  );
});

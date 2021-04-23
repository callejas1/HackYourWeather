import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WeatherApp } from './components/WeatherApp';
import { WeatherChart } from './components/WeatherChart';
import { CityContext } from './util/CityContext'

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  return (
    <CityContext.Provider value={{ cityName, setCityName, weatherData, setWeatherData }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/:cityId">
              <WeatherChart />
            </Route>
            <Route path="/" exact>
              <WeatherApp />
            </Route>
          </Switch>
        </div>
      </Router>
    </CityContext.Provider>
  );
}

export default App;

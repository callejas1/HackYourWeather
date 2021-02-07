import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WeatherApp } from './components/WeatherApp';
import { WeatherChart } from './components/WeatherChart';

function App() {
  return (
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
  );
}

export default App;

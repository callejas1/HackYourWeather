import './App.css';
import WeatherApp from './Form-component/WeatherApp';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <div>
        <h1>Weather</h1>
        <WeatherApp />
      </div>
    </div>
  );
}

export default App;

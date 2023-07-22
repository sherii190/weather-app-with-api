import './App.css';
import TopButton from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureDetails from './components/TemperatureDetails';
import Forecast from './components/Forecast';
// import getWeatherData from './services/weatherServices';
import getFormattedWeatherData from './services/weatherServices';
import { useEffect, useState } from 'react';


function App() {
  const [query, setQuery] = useState({ q: 'Stockholm' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  // useEffect: every time  the query(location) or units changes  the API call would be made to fetch new data. !
  useEffect(() => {
    const fetchWeather = async () => {
      // const data = await getFormattedWeatherData({ q: "london" });
      // console.log(data);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
        console.log('you are seeing updated weather', weather);
      });
    }
    fetchWeather();
  }, [query, units])


  const formatBackground = () => {
    if (!weather) return ' from-cyan-700 to-blue-700';
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'from-cyan-700';
    return 'from-cyan-700 to-blue-700'
    //return 'from-yellow-700 to-orange-700'
  }


  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButton setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      {/* && if true then render  */}
      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureDetails weather={weather} />
          <Forecast title="Hourly forecast" items={weather.hourly} />
          <Forecast title="Daily forecast" items={weather.daily} />
        </div>
      )}

    </div>
  );
}

export default App;

import WeatherIcon from './components/WeatherForecast/WeatherIcon.jsx'
import WeatherData from './components/WeatherForecast/WeatherData.jsx'
import './App.css';

const weatherForecasts = [
  {
    day: 'Mon',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/day.svg',
    imgAlt: 'sun icon',
    conditions: 'sunny',
    time: 'Morning',
  },
  {
    day: 'Tue',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/night.svg',
    imgAlt: 'moon icon',
    conditions: 'clear',
    time: 'Night',
  },
  {
    day: 'Wed',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/stormy.svg',
    imgAlt: 'clouds with lightning icon',
    conditions: 'stormy',
    time: 'All Day',
  },
  {
    day: 'Thu',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-day.svg',
    imgAlt: 'sun overcast by clouds icon',
    conditions: 'overcast',
    time: 'Evening',
  },
  {
    day: 'Fri',
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-components-lab/assets/cloudy-night.svg',
    imgAlt: 'moon overcast by clouds icon',
    conditions: 'cloudy',
    time: 'Night',
  },
];

<>
  <h1>Local Weather</h1>
  <section>

  </section>
</>


const App = () => {
  // const weatherInfo = {
  //   day: 'Monday',
  //   time: 'Morning',
  //   conditions: 'Sunny,'
  // }
  return (
      <div>
        <h1>Weather Information</h1>
        <WeatherData
          day={weatherForecasts[0].day}
          time={weatherForecasts[0].time}
          conditions={weatherForecasts[0].conditions}
        />
        </div>
  );
}

<div>
  <WeatherIcon
img={weatherForecasts[0].img}
alt={weatherForecasts[0].imgAlt}
  />
</div>

export default App

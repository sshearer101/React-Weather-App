import './App.css';
import { useState } from 'react';
import Search from './Components/Search';
import Weather from './Components/Weather';
import Header from './Components/Header';

const api = {
  key: "dd8225000d30499678711cc3fa28414e",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  // const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  function searchWeather(evt){
    if(evt.key === "Enter"){
      fetch(`${api.base}weather?q=${evt.target.value}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(res => setWeather(res))
    }
  }


 function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  console.log(weather)
  return (
    <div className={
      (typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16 ) 
      ? 'App warm' : 'App') 
      : 'App'}
    >
      <main>
      <Header />
      <Search searchWeather={searchWeather} />
      <Weather dateBuilder={dateBuilder} weather={weather}/>
      </main>
    </div>
  );
}

export default App;

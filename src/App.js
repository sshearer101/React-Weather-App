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

 function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <Search />
      <Header dateBuilder={dateBuilder}/>
      <Weather />
    </div>
  );
}

export default App;



export default function Weather({dateBuilder, weather}){
    console.log(weather)
    return(
        <div>
        {(typeof weather.main != "undefined") ? (
            <div>
        <div className="location"> {weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date)}</div>
        <div className="weather">
            <div className="temperature">
                {Math.round((weather.main.temp * 1.8) + 32)}˚F
            </div>
            <div className="forecast">
                {weather.weather[0].main} 
            </div>
        </div>
        </div>
        ) : ('')}
        </div>
    )
}

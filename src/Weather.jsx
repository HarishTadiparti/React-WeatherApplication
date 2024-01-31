

function Weather({data}){
    return(
        <div className='weather-card' >
            <div className="weather-header">
                <div className="header-left">
                    <div className="header-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <h2 className='location-text' >{data.cityName}, {data.country}</h2>
                    </div>
                    <h1 className='header-temperature' >{data.temp}&deg;</h1>
                </div>
                <div className="header-right">
                    <i className="fa-solid fa-cloud"></i>
                    <h2 className='weather-type' >{data.weather}</h2>
                </div>
            </div>

            <div className="weather-description">
                <p>{data.weather} conditions will continue for the rest of the day.</p>
            </div>

            <div className="weather-details">
                <div className="details-card">
                    <div className="details-header">
                        <h3>Feels Like</h3>
                        <p>{data.feelsLike}&deg;</p>
                    </div>
                    <p>Humidity is making it feel warmer.</p>
                </div>
                <div className="details-card">
                    <div className="details-header">
                        <h3>Humidity</h3>
                        <p>{data.humidity}%</p>
                    </div>
                    <p>The dew point is 18&deg; right now.</p>
                </div>
                <div className="details-card">
                    <div className="details-header">
                        <h3>Pressure</h3>
                        <p>{data.pressure}hpa</p>
                    </div>
                    <p>it's perfectly normal atmospheric pressure.</p>
                </div>
            </div>
        </div>
    )
}

export default Weather;

import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import Weather from './Weather';


function WeatherApp(){
    let [responseData, setResponseData] = useState({cityName: '',country: '', temp: '', humidity: '', feelsLike: '', pressure: '', weather: ''})
    let [err, setErr] = useState(false)
    let API_KEY = import.meta.env.VITE_API_KEY
    let API_URL = import.meta.env.VITE_API_URL

    let getWeatherInfo = async (city) => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            setResponseData({
                cityName: jsonResponse.name,
                country: jsonResponse.sys.country,
                temp: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
            })
        }
        catch(err){
            setErr(true)
        }
        }
        

    useEffect(() => {
        async function getFirstResponse(){
            let response = await fetch(`${API_URL}?q=Delhi&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            setResponseData({
                cityName: jsonResponse.name,
                country: jsonResponse.sys.country,
                temp: jsonResponse.main.temp,
                feelsLike: jsonResponse.main.feels_like,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                weather: jsonResponse.weather[0].description,
            })
        }
        getFirstResponse();
    }, [])

    return(
        <div className="weatherApp">

            <SearchBar city={getWeatherInfo}/>

            {
                err ? <p>No search place found</p> : <Weather data={responseData} err={err} />
            }
            

        </div> 
    )
}

export default WeatherApp
import { FunctionComponent, useEffect, useState } from "react"
import {FaThermometerThreeQuarters} from 'react-icons/fa'

const WEATHER_KEY = process.env.REACT_APP_OPEN_WEATHER_MAP_KEY!
// const RAPID_API_KEY = process.env.REACT_APP_RAPID_API_KEY!

interface WeatherDisplayProps {
    lat: number,
    lng: number
}

type CurrentWeather = Record<string, any> // placeholder until final interface is determined

export const WeatherDisplay: FunctionComponent<WeatherDisplayProps> = ({lat, lng}) => {
    // STATE //
    const [currentWeather, setCurrentWeather] = useState<CurrentWeather>({})

    // API REQ //
    const getWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lon=${lng}&lat=${lat}&units=imperial&appid=${WEATHER_KEY}`
        )
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(res => {
                console.log(res)
                setCurrentWeather(res)
            })
    }

    // HOOKS //
    useEffect(() => {
        getWeather()
    }, [lat, lng])

    return (
        currentWeather.main ? <div className = "weather-display">
            <h5>Current Weather</h5>
            <div id="icon"><img id="wicon" src={"http://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png"} alt="Weather icon" /></div>
            <p className = "weather-text"><FaThermometerThreeQuarters /> {Math.round(currentWeather.main.temp)}: {currentWeather.weather[0].description}</p>
            <p className = "weather-text">High: {Math.round(currentWeather.main.temp_max)} Low: {Math.round(currentWeather.main.temp_min)}</p>
        </div>
        : <div>
            Weather Display
        </div>
    )
}

// https://forum.freecodecamp.org/t/calling-openweathermap-api-is-blocked-due-to-cors-header-access-control-allow-origin-missing/191868 used this resource to structure cors proxy for eatherbit api request

// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon used this and https://openweathermap.org/weather-conditions to use icon from weatehr api
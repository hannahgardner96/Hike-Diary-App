// import { useState } from "react"
import { FunctionComponent, useEffect } from "react"

const KEY = process.env.REACT_APP_WEATHER_API_KEY

interface WeatherDisplayProps {
    lat: number,
    lng: number
}

export const WeatherDisplay: FunctionComponent<WeatherDisplayProps> = ({lat, lng}) => {
    // STATE //
    // const [weatherElement, setWeatherElement] = useState("")

    // API REQ //
    

    // HOOKS //
    useEffect(() => {
        const getWeather = async () => {
            let today = await new Date()
            let startDate = today.getFullYear() + "-" + today.getMonth() + "-" + today.getDate()
            let endDate = today.getFullYear() + "-" + today.getMonth() + "-" + (today.getDate() + 1)
            console.log("start date: " + startDate + "end date: " + endDate)
            const res = await fetch(`https://cors-anywhere.herokuapp.com/http://api.weatherbit.io/v2.0/history/daily?lat=${lat}&lon=${lng}&start_date=${startDate}&end_date=${endDate}&units=I&key=${KEY}`)
            const resJson = await res.json()
            return resJson
        }
        getWeather()
            .then(console.log)
    }, [lat, lng])

    return (
        <h6>Weather Display</h6>
    )
}

// https://forum.freecodecamp.org/t/calling-openweathermap-api-is-blocked-due-to-cors-header-access-control-allow-origin-missing/191868 used this resource to structure cors proxy for eatherbit api request
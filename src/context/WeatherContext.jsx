import { createContext, useState } from "react";
import { getWeatherData } from "../services/weatherServices";

export const WeatherContext = createContext();

function WeatherProvider({ children }){
    // Store City
    const [city, setCity]               = useState("Hyderabad");
    // Store Weather Data
    const [weatherData, setWeatherData] = useState(null);
    // Loading & Error States
    const [loading, setLoading]         = useState(false);
    const [error, setError]             = useState(null);

    // Fetch Weather Function
    const fetchWeather = async (selectedCity) => {

        try{
            setLoading(true);
            setError(null);

            const data = await getWeatherData (selectedCity);

            setWeatherData(data);
            setCity(selectedCity);
        } catch (err){
            setError(err.response?.data?.error?.message ||  "Faild to fetch weather data");
        } finally {
            setLoading(false)
        }
    }

    return (
        <WeatherContext.Provider
            value={{
                city,
                weatherData,
                loading,
                error,
                fetchWeather,
            }}
        >
            { children }
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
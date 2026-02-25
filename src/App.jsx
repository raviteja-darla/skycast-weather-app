import React, { useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import HourlyForecast from "./components/HourlyForecast";
import WeeklyForcast from "./components/WeeklyForcast";
import AirCondition from "./components/AirCondition";
import useWeather from "./hooks/useWeather";
import Header from "./components/Header";

function App() {

    const { city, weatherData, loading, error, fetchWeather } = useWeather();

    useEffect(() => {
        fetchWeather(city)
    }, [city])

    return (
        <div className="app-wrapper">
            {/* <Header /> */}

            {/* Loader will activate while API trigger */}
            {loading && <p>Loading...</p>}

            {/* Error will show up if API call failed or data not found */}
            {error && <p> { error }</p>}

            {/* SearchBox */}
            <SearchBar/>

            {/* Weather Data */}
            {weatherData && 
                (
                    <div className="weather-container">
                        <div className="left_coloum">
                            <CurrentWeather/>
                            <HourlyForecast/>
                        </div>
                        <div className="right_coloum">
                            <AirCondition/>
                            <WeeklyForcast/>
                        </div>
                    </div>
                )    
            }
        </div>
    );
}

export default App;

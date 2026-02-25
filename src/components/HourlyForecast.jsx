import React from 'react'
import ForecastCard from './ForecastCard';
import useWeather from '../hooks/useWeather';

const HourlyForecast = () => {
    
    const { weatherData } = useWeather();

    const hour = weatherData.forecast.forecastday[0].hour;



    return (
        <div className='hourly_forecast container'>
            <div className='section_heading'>Today's Forecast</div>
            <div className='hour_forecast_grid'>
                {hour.map((hour, index) => {
                    return (
                        <ForecastCard 
                            key={ index }
                            time={ hour.time }
                            temp={ hour.temp_c }
                            icon={ hour.condition.icon }
                        />
                    )
                })}
            </div>
            

        </div>
    )
}

export default HourlyForecast

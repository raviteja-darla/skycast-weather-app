import React from 'react'
import useWeather from '../hooks/useWeather';

const WeeklyForcast = () => {
    
    const { weatherData } = useWeather();

    const days = weatherData.forecast.forecastday;

    return (
        <div className='weeklyForcast container'>
            <div className='section_heading'>Weekly Forecast</div>
            <div className='weekly_grid'>   
                {days.map((day, index) => {
                    return (
                        <div className='weekly_card' key={ index }>
                            <div>{ day.date }</div>
                            <div>
                                <img src={ day.day.condition.icon } alt="" />
                            </div>
                            <div>{ day.day.maxtemp_c }°C / { day.day.mintemp_c }°C </div>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default WeeklyForcast

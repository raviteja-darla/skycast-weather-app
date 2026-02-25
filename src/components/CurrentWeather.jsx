import React from 'react'
import useWeather from '../hooks/useWeather'
import { getWeatherImage } from '../utils/weatherImageMapper';

const CurrentWeather = () => {

    const { weatherData } = useWeather();

    const condition = weatherData?.current?.condition?.text;

    const isDay = weatherData?.current?.is_day;

    const weatherImage = getWeatherImage(condition, isDay);

    return (
        <div className='currentWeather container'>
            
            <div className='currentWeather_section_1'>
                <div className='current_city'>{ weatherData?.location?.name }, { weatherData?.location?.country }</div>
                <div className="live">Live Update</div>
            </div>

            <div className='currentWeather_section_2'>
                <img 
                    src={ weatherImage } 
                    alt="Weather Icon" 
                />
            </div>

            <div className='currentWeather_section_3'>
                <div className='curr_temp_in_deg'>{ weatherData?.current?.temp_c }°</div>
                <p className='curr_temp_in_text'>{ weatherData?.current?.condition?.text }</p>
            </div>

        </div>
    )
}

export default CurrentWeather

import React from 'react'
import AirCondintionCard from './AirCondintionCard'
import useWeather from '../hooks/useWeather'

const AirCondition = () => {

    const { weatherData  } = useWeather();
    return (
        <div>
            <div className='airCondtion container'>
                <div className='section_heading'>Air Condition</div>
                <div className='air-grid'>

                <div className='airCondtionCard'>
                    <AirCondintionCard 
                        title="Real Feel"
                        value={ `${weatherData?.current?.feelslike_c}°C` }
                    />

                    <AirCondintionCard 
                        title="Wind"
                        value={`${weatherData?.current?.wind_kph}kph`}
                    />

                    <AirCondintionCard 
                        title="Humidity"
                        value={`${weatherData?.current?.humidity}%`}
                    />
                    
                    <AirCondintionCard 
                        title="UV Index"
                        value={weatherData?.current?.uv}
                    />

                    <AirCondintionCard 
                        title="Chance of Rain"
                        value={`${weatherData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}%`}
                    />
                </div>

                </div>
            </div>
        </div>
    )
}

export default AirCondition

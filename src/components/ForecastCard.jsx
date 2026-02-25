import React from 'react'

const ForecastCard = ({ time, temp, icon }) => {

    return (
        <div className='hour_forecast_card'>
            <div> { temp } °C</div>
            <img src={ icon } alt="" />
            <div> { time.split(" ")[1] } </div>
        </div>
    )
}

export default ForecastCard

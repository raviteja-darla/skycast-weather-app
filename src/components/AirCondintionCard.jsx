import React from 'react'

const AirCondintionCard = ({ title, value }) => {
    return (
        <div className='air-card'>
            <div>{ title }</div>
            <div>{ value }</div>
        </div>
    )
}

export default AirCondintionCard

import React, { useState } from 'react'
import useWeather from '../hooks/useWeather';
import searchIcon from '../assets/search.png'

const SearchBar = () => {
    
    const [input, setInput] = useState("");
    
    const { fetchWeather  } = useWeather();

    const handler = (e) => {
        e.preventDefault();

        if(input.trim() !== "") {
            fetchWeather(input);
            setInput("");
        } 
    }

    return (
        <div className='search_bar'>
            <input 
                type="text"
                placeholder='Search city...'
                value={ input }
                onChange={ (e) => setInput(e.target.value) }
            />
            <button onClick={ handler }><img src={searchIcon} alt="" /></button>
        </div>
    )
}

export default SearchBar;

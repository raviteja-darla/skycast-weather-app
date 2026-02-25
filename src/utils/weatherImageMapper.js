import clearDay from "../assets/weather-icons/clear-day.png";
import clearNight from "../assets/weather-icons/clear-night.png";
import partlyCloudy from "../assets/weather-icons/partly-cloudy.png";
import cloudy from "../assets/weather-icons/cloudy.png";
import overcast from "../assets/weather-icons/overcast.png";
import lightRain from "../assets/weather-icons/light-rain.png";
import heavyRain from "../assets/weather-icons/heavy-rain.png";
import snow from "../assets/weather-icons/snow.png";
import mistFog from "../assets/weather-icons/mist-fog.png";
import thunderstorm from "../assets/weather-icons/thunderstorm.png";
import windy from "../assets/weather-icons/windy.png";

// Mapping function conditionText -> API Weather condition text isDay -> 1(day) or 0(night);
export const getWeatherImage = (conditionText, isDay) => {
    if(!conditionText) return clearDay;

    const text = conditionText.toLowerCase();

    // CLEAR / SUNNY
    if(text.includes("partly") || text.includes("clear")){
        return isDay ? clearDay : clearNight;
    }

    // PARTLY CLOUDY
    if(text.includes("partly")) {
        return partlyCloudy;
    }

    // OVERCAST
    if(text.includes("overcast")){
        return overcast;
    }

    // CLOUDY
    if (text.includes("cloud")) {
        return cloudy;
    }

    // THUNDERSTORM
    if(text.includes("thunder")){
        return thunderstorm;
    }

    // HEAVY RAIN
    if(text.includes("heavy rain") || text.includes("torrential")){
        return heavyRain;
    }

    // LIGHT RAIN / DRIZZLE
    if(text.includes("rain") || text.includes("dirzzle")){
        return lightRain;
    }

    // SNOW
    if (text.includes("snow")) {
        return snow;
    }

    // MIST / FOG / HAZE
    if (text.includes("mist") || text.includes("fog") || text.includes("haze")) {
        return mistFog;
    }

    // WINDY
    if (text.includes("wind")) {
        return windy;
    }

    // Default fallback
    return clearDay;
}
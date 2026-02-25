import axios from "axios";

const api = axios.create({
    baseURL: "https://api.weatherapi.com/v1",
});

export const getWeatherData = async (city) => {
    const response = await api.get("/forecast.json", {
        params: {
            key: import.meta.env.VITE_WEATHER_API_KEY,
            q: city,
            days: 3,
            aqi: "yes",
            alerts: "yes",
        },
    });
    return response.data;
};
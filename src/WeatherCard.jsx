import React from "react";

export default function WeatherCard({ weather }) {
  if (!weather || !weather.city || !weather.temperature) {
    return null;
  }

  if (weather.error) {
    return <div className="weather-card error">{weather.error}</div>;
  }

  const weatherDescriptions = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Slight rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Light freezing rain",
    67: "Heavy freezing rain",
    71: "Slight snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Slight rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Slight snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
  };

  const weatherDescription = weatherDescriptions[weather.weathercode] || "Unknown";

  // Use relative humidity if available
  const humidity = weather.humidity ?? weather.relativehumidity_2m ?? "N/A";

  return (
    <div className="weather-card">
      <h2>
        {weather.city}, {weather.country}
      </h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
      <p>Condition: {weatherDescription}</p>
    </div>
  );
}

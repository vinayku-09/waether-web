async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey =  // Your WeatherAPI key

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const { location, current } = data;

        document.getElementById('weather-result').innerHTML = `
            <h2>Weather in ${location.name}, ${location.country}</h2>
            <p>Temperature: ${current.temp_c}°C</p>
            <p>Condition: ${current.condition.text}</p>
            <img src="https:${current.condition.icon}" alt="Weather Icon">
        `;
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

// Prevent form reload
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    getWeather();
});

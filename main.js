const apiKey = '156d5af96d0a0fe08be78f93fcc4b1c6';
const lat = 35.6895;
const lon = 139.6917;

const weatherInfo = document.getElementById('weather-info');
const refreshButton = document.getElementById('refresh-button');

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('location').innerText = `Location: ${data.name}`;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
        } else {
            throw new Error('Failed to fetch weather data');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
    }
}

fetchWeather();

refreshButton.addEventListener('click', fetchWeather);

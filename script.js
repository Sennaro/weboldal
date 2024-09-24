
const apiKey = '0eb6ec05013e5c72e2a09a1348e20a10';

async function fetchTemperature(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    if (!response.ok) {
        throw new Error('City not found');
    }
    const data = await response.json();
    return data.main.temp; 
}


async function displayTemperature() {
    const city = document.getElementById('city-input').value;
    const tempResult = document.getElementById('temp-result');
    try {
        const temperature = await fetchTemperature(city);
        tempResult.innerHTML = `The temperature in <strong>${city}</strong> is <strong>${temperature}°C</strong>.`;
    } catch (error) {
        tempResult.innerHTML = `Error: ${error.message}`;
    }
}


document.getElementById('getTemperature').addEventListener('click', displayTemperature);
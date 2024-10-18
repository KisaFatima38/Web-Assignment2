const apiKey = '1720969d247faec50cd966e8ac0f922e';
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherWidget = document.getElementById('weatherWidget');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const forecastTable = document.getElementById('forecastTable');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const currentPageSpan = document.getElementById('currentPage');

let currentPage = 1;
const itemsPerPage = 10;
let forecastData = [];

let tempChart, conditionChart, tempLineChart;

searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeather(city);
        getForecast(city);
    }
});

async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        cityName.textContent = data.name;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Description: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        const iconElement = document.getElementById('weatherIcon');
        iconElement.src = iconUrl; 
        iconElement.alt = data.weather[0].description; 

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('An error occurred while fetching weather data');
    }
}


async function getForecast(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        
        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        forecastData = data.list;
        updateForecastTable();
        createCharts(forecastData);
    } catch (error) {
        console.error('Error fetching forecast data:', error);
        alert('An error occurred while fetching forecast data');
    }
}

function updateForecastTable() {
    const tbody = forecastTable.querySelector('tbody');
    tbody.innerHTML = '';

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = forecastData.slice(startIndex, endIndex);

    pageData.forEach(item => {
        const row = tbody.insertRow();
        const date = new Date(item.dt * 1000);
        const formattedDate = date.toLocaleDateString();
        const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        row.insertCell(0).textContent = `${formattedDate} ${formattedTime}`;
        row.insertCell(1).textContent = `${item.main.temp}°C`;
        row.insertCell(2).textContent = item.weather[0].description;

        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        const iconCell = row.insertCell(3);
        const iconImg = document.createElement('img');
        iconImg.src = iconUrl;
        iconImg.alt = item.weather[0].description;
        iconImg.style.width = '50px'; 
        iconCell.appendChild(iconImg);
    });

    currentPageSpan.textContent = currentPage;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = endIndex >= forecastData.length;
}



prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updateForecastTable();
    }
});

nextPageBtn.addEventListener('click', () => {
    if ((currentPage * itemsPerPage) < forecastData.length) {
        currentPage++;
        updateForecastTable();
    }
});

function createCharts(data) {
    if (tempChart) tempChart.destroy();
    if (conditionChart) conditionChart.destroy();
    if (tempLineChart) tempLineChart.destroy();

    tempChart = createTemperatureBarChart(data);
    conditionChart = createWeatherConditionChart(data);
    tempLineChart = createTemperatureLineChart(data);
}

function createTemperatureBarChart(data) {
    const ctx = document.getElementById('tempChart').getContext('2d');
    const temperatures = data.slice(0, 5).map(item => item.main.temp);
    const labels = data.slice(0, 5).map(item => new Date(item.dt * 1000).toLocaleDateString());

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                backgroundColor: 'rgba(75, 192, 192, 0.6)'
            }]
        },
        options: {
            responsive: true,
            animation: {
                delay: 500
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function createWeatherConditionChart(data) {
    const ctx = document.getElementById('conditionChart').getContext('2d');
    const conditions = data.slice(0, 5).map(item => item.weather[0].main);
    const conditionCounts = conditions.reduce((acc, condition) => {
        acc[condition] = (acc[condition] || 0) + 1;
        return acc;
    }, {});

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(conditionCounts),
            datasets: [{
                data: Object.values(conditionCounts),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            responsive: true,
            animation: {
                delay: 500
            }
        }
    });
}

function createTemperatureLineChart(data) {
    const ctx = document.getElementById('tempLineChart').getContext('2d');
    const temperatures = data.slice(0, 5).map(item => item.main.temp);
    const labels = data.slice(0, 5).map(item => new Date(item.dt * 1000).toLocaleDateString());

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Temperature (°C)',
                data: temperatures,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            animation: {
                duration: 1000,
                easing: 'easeOutBounce'
            },
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    let dayNightBtn = document.querySelector('.day-night-btn');
    const dayNightBtns = document.querySelector('.day-night-btn1');

    dayNightBtn.addEventListener('click', function () {
        document.body.classList.toggle('day-mode');
        dayNightBtn.classList.toggle('active');
    });
    dayNightBtns.addEventListener('click', function () {
        document.body.classList.toggle('day-mode');
        dayNightBtns.classList.toggle('active');
    });
});
const city = document.querySelector('#mobile-after-img');
const todayTemp = document.querySelector('#today-temp');
const day = document.querySelector('#day');
const humidityElement = document.querySelector('#humidity');
const sun = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset')
const dewPonit = document.querySelector('#dew')
const visibility = document.querySelector('#visibility')
const fellsLike = document.querySelector('#feels')

function getApi() {
    fetch('weatherJSON.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            city.innerHTML = data.city;
            todayTemp.innerHTML = data.current_weather.temperature;
            sun.innerHTML = data.current_weather.sunrise;
            sunset.innerHTML = data.current_weather.sunset;
            humidityElement.innerHTML = data.current_weather.humidity;
            dewPonit.innerHTML = data.current_weather.dew_point;
            visibility.innerHTML = data.current_weather.visibility;
            fellsLike.innerHTML = data.current_weather.feels_like;
        })
        .catch(error => {
            console.error('Error fetching API:', error);
        });
}

getApi();

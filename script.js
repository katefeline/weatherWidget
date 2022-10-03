let weatherBlock = document.querySelector('#weather');

function loadWeather(e) {
    const serverGeolocation = 'http://api.openweathermap.org/geo/1.0/direct?q=Odesa&limit=5&appid=4e17376578c1e3557b2e3389168372e6';
    const responseGeolocation = fetch(serverGeolocation, {
        method: "GET",
    });
    const responseResultGeolocation = responseGeolocation.json();

    if(responseGeolocation.ok) {
        getGeolocation(responseResultGeolocation);
    } else {
        weatherBlock.innerHTML = responseResultGeolocation.message;
    }

}

function getGeolocation(data) {
    let dataOfOdesa = data[0];

    let NameOdesa = dataOfOdesa.name;
    let lattitude = dataOfOdesa.lat;
    let longutide = dataOfOdesa.lon;
}

async function loadWeather(e) {
    weatherBlock.innerHTML = `
    <div>
        <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" alt="Loading..."></img>
    </div>`;

    const server = 'https://api.openweathermap.org/data/2.5/weather?lat=46.4843023&lon=30.7322878&appid=4e17376578c1e3557b2e3389168372e6&units=metric';
    const response = await fetch(server, {
        method: "GET",
    });
    const responseResult = await response.json();

    if(response.ok) {
        getWeather(responseResult);
    } else {
        weatherBlock.innerHTML = responseResult.message;
    }

}

function getWeather(data) {
    let cityName = data.name;
    let weatherStatus = data.weather[0].main;
    let weatherIcon = data.weather[0].icon;
    let temperatureNow = Math.round(data.main.temp);
    let temperatureFeelsLike = Math.round(data.main.feels_like);

    let widget = `
    <div>
        <H1>
            This is my weather application for ${cityName}
        </H1>
        <p>
            The weather now is ${temperatureNow} <sup>C</sup>, feels like ${temperatureFeelsLike} <sup>C</sup>. It's ${weatherStatus}.
        </p>
        <img src="https://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}">
    </div>`;

    weatherBlock.innerHTML = widget;
}


if (weatherBlock) {
    loadWeather();
}

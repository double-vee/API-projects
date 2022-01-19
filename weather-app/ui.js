class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.icon = document.getElementById("w-icon");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
    this.humidity = document.getElementById("w-humidity");
  }

  paint(weatherData) {
    const { main, weather, wind, sys, name } = weatherData;

    this.location.textContent = `${name}, ${sys.country}`;
    this.desc.textContent = weather[0].description;
    this.string.textContent = main.temp;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/w/${weather[0].icon}.png`
    );
    this.feelsLike.textContent = `Feels like: ${main.feels_like}`;
    this.wind.textContent = `Wind: ${wind.speed}`;
    this.humidity.textContent = `Humidity: ${main.humidity}`;
  }
}

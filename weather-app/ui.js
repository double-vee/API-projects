class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.temp = document.getElementById("w-temp");
    this.tempMin = document.getElementById("w-temp-min");
    this.tempMax = document.getElementById("w-temp-max");
    this.icon = document.getElementById("w-icon");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
    this.humidity = document.getElementById("w-humidity");
    this.pressure = document.getElementById("w-pressure");
    this.visibility = document.getElementById("w-visibility");
  }

  paint(weatherData) {
    const { main, weather, wind, visibility, sys, name } = weatherData;

    this.location.textContent = `${name}, ${sys.country}`;
    this.desc.textContent = weather[0].description;
    this.temp.textContent = `${Math.floor(main.temp)}°C`;
    this.tempMin.textContent = `Min: ${Math.floor(main.temp_min)}°C`;
    this.tempMax.textContent = `Max: ${Math.floor(main.temp_max)}°C`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    );
    this.feelsLike.textContent = `Feels like: ${Math.floor(main.feels_like)}°C`;
    this.wind.textContent = `Wind: ${wind.speed} m/s`;
    this.humidity.textContent = `Humidity: ${main.humidity}%`;
    this.pressure.textContent = `Pressure: ${main.pressure} hPa`;
    this.visibility.textContent = `Visibility: ${visibility} m`;
  }
}

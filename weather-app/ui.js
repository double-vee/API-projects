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

  paint(weatherData, units) {
    const { main, weather, wind, visibility, sys, name } = weatherData;
    let tempUnit = "";
    let speedUnit = "";
    let distUnit = "";
    let pressUnit = "";
    let calcVisibility = visibility;
    let calcPressure = main.pressure;

    if (units === "metric") {
      tempUnit = "C";
      speedUnit = "m/s";
      distUnit = "m";
      pressUnit = "hPa";
    } else if (units === "imperial") {
      tempUnit = "F";
      speedUnit = "mph";
      distUnit = "mi";
      pressUnit = "psi";
      calcVisibility = visibility / 1609.34;
      calcPressure = main.pressure / 68.95;
    }

    this.location.textContent = `${name}, ${sys.country}`;
    this.desc.textContent = weather[0].description;
    this.temp.textContent = `${Math.floor(main.temp)}°${tempUnit}`;
    this.tempMin.textContent = `Min: ${Math.floor(main.temp_min)}°${tempUnit}`;
    this.tempMax.textContent = `Max: ${Math.floor(main.temp_max)}°${tempUnit}`;
    this.icon.setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
    );
    this.feelsLike.textContent = `Feels like: ${Math.floor(
      main.feels_like
    )}°${tempUnit}`;
    this.wind.textContent = `Wind: ${wind.speed} ${speedUnit}`;
    this.humidity.textContent = `Humidity: ${main.humidity}%`;
    this.pressure.textContent = `Pressure: ${Math.floor(
      calcPressure
    )} ${pressUnit}`;
    this.visibility.textContent = `Visibility: ${Math.floor(
      calcVisibility
    )} ${distUnit}`;
  }

  closeModal() {
    const modal = document.getElementById("locModal");
    const modalBackdrop = document.querySelector(".modal-backdrop");
    modal.classList.remove("show");
    modal.setAttribute("style", "display: none");
    modal.setAttribute("aria-hidden", "true");
    modal.removeAttribute("aria-modal");
    modal.removeAttribute("role");
    modalBackdrop.remove();
    document.body.setAttribute("style", "");
    document.body.classList.remove("modal-open");
  }
}

const ui = new UI();
const storage = new Storage();
const savedCity = storage.getLocation().city;
const savedState = storage.getLocation().state;
const savedUnits = storage.getUnits();
const weather = new Weather(savedCity, savedState, savedUnits);

document.addEventListener("DOMContentLoaded", showWeather);

function showWeather() {
  weather
    .getWeather()
    .then(({ data, units }) => {
      storage.saveUnits(units);
      ui.paint(data, units);
    })
    .catch(console.log);
}

document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  storage.saveLocation(city, state);
  showWeather();
  ui.closeModal();
});

document.getElementById("btn-units").addEventListener("click", () => {
  weather.changeUnits();
  showWeather();
});

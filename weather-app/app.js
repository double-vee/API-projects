const weather = new Weather("Warsaw", "PL", "metric");
const ui = new UI();

document.addEventListener("DOMContentLoaded", showWeather);

function showWeather() {
  weather
    .getWeather()
    .then(({ data, units }) => {
      ui.paint(data, units);
    })
    .catch(console.log);
}

document.getElementById("w-change-btn").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  showWeather();
  ui.closeModal();
});

document.getElementById("btn-units").addEventListener("click", () => {
  weather.changeUnits();
  showWeather();
});

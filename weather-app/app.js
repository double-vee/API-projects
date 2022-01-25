const weather = new Weather("Warsaw", "PL", "metric");
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch(console.log);
});

document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;

  weather.changeLocation(city, state);
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch(console.log);
});

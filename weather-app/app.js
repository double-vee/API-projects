const weather = new Weather("Warsaw", "PL");
const ui = new UI();

document.addEventListener("DOMContentLoaded", () => {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch(console.log);
});

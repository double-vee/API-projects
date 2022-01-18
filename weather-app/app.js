const weather = new Weather("Warsaw", "PL");

document.addEventListener("DOMContentLoaded", () => {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);
    })
    .catch(console.log);
});

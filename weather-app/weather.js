class Weather {
  constructor(city, state, units) {
    this.apiKey = API_KEY;
    this.city = city;
    this.state = state;
    this.units = units;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=${this.units}&appid=${this.apiKey}`
    );
    const result = await response.json();
    return result;
  }
}

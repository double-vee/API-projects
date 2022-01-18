class Weather {
  constructor(city, state) {
    this.apiKey = API_KEY;
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`
    );
    const result = await response.json();
    return result;
  }
}

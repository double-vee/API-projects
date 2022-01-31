class Storage {
  constructor() {
    this.city;
    this.state;
    this.units;
    this.defaultCity = "Warsaw";
    this.defaultState = "PL";
    this.defaultUnits = "metric";
  }

  saveLocation(city, state) {
    const location = {
      city,
      state,
    };
    localStorage.setItem("loc", JSON.stringify(location));
  }

  saveUnits(units) {
    localStorage.setItem("units", units);
  }

  getLocation() {
    if (localStorage.getItem("loc") === null) {
      this.city = this.defaultCity;
      this.state = this.defaultState;
    } else {
      this.city = JSON.parse(localStorage.getItem("loc")).city;
      this.state = JSON.parse(localStorage.getItem("loc")).state;
    }

    return {
      city: this.city,
      state: this.state,
    };
  }

  getUnits() {
    if (localStorage.getItem("units") === null) {
      this.units = this.defaultUnits;
    } else {
      this.units = localStorage.getItem("units");
    }

    return this.units;
  }
}

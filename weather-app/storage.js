class Storage {
  constructor() {}

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
}

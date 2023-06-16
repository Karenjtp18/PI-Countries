const { Router } = require("express");
const countryrouter = Router();
const {
  getCountries,
  getCountryById,
  getCountryByName,
} = require("../Handlers/CountryHandlers");

countryrouter.get("/", getCountries);

countryrouter.get("/countries/:id", getCountryById);

countryrouter.get("/countries", getCountryByName);

module.exports = countryrouter;

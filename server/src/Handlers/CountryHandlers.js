const { getAllCountries } = require("../Controllers/countriesController");

const getCountries = async (req, res) => {
  let countries = await getAllCountries(); //Deposita todo los datos de la db;
  try {
    countries.length
      ? res.status(200).json(countries)
      : res.status(404).send("Not found... ):");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCountryById = async (req, res) => {
  const { id } = req.params; // Obtén el valor del parámetro id correctamente
  let countries = await getAllCountries();
  if (id) {
    let country = countries.filter((fl) => fl.id === id);
    country.length
      ? res.status(200).json(country)
      : res.status(404).send("No se ha encontrado");
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      let countries = await getAllCountries();
      let country = countries.filter((fl) =>
        fl.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log("countries", country);
      country.length
        ? res.status(200).json(country)
        : res.status(404).send("No se ha encontrado");
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
};

// const getCountryByName = async (req, res) => {
//   const { name } = req.query;
//   if (name) {
//     try {
//       let countries = await getAllCountries();
//       let country = countries.filter((fl) =>
//         fl.name.toLowerCase().includes(name.toLowerCase())
//       );
//       if (country.length) {
//         res.status(200).json(country);
//       } else {
//         res.status(404).send("No se encontraron países con ese nombre");
//       }
//     } catch (error) {
//       console.log(error);
//       res.status(500).send(error);
//     }
//   } else {
//     res.status(400).send("Por favor, proporciona un nombre de país");
//   }
// };

module.exports = {
  getCountries,
  getCountryById,
  getCountryByName,
};

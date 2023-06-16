const { Country, Activity } = require("../db.js");
const axios = require("axios");

const getDbInfo = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllCountries = async () => {
  let dbInfo = await getDbInfo();

  if (!dbInfo.length) {
    const countries = await getApiInfo();

    for (const country of countries) {
      await Country.create(country);
    }

    dbInfo = await getDbInfo();
  }

  return dbInfo;
};

module.exports = {
  getDbInfo,
  getAllCountries,
};

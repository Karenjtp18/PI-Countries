const { Country, Activity } = require("../db.js");
const { v4: uuidv4 } = require("uuid");

const addActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    console.log("will add activity", req.body);

    const validateActivity = await Activity.findOne({
      where: {
        name: name,
      },
    });

    if (!name || !difficulty || !duration || !season || !countries) {
      return res.status(404).json("Porfavor complete todos los campos.");
    }

    if (validateActivity) {
      return res.status(404).json("Esta actividad ya exite.");
    } else {
      const id = uuidv4();
      const newActivity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season,
      });

      if (Array.isArray(countries)) {
        for (const countryId of countries) {
          await newActivity.addCountry(countryId);
        }
      } else {
        await newActivity.addCountry(countries);
      }

      res.status(200).send("OK");
    }
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

const getActivities = async (req, res) => {
  let activity = await Activity.findAll();
  res.status(200).send(activity);
};

module.exports = {
  addActivity,
  getActivities,
};

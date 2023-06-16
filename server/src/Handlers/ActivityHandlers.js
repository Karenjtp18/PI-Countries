const {
  addActivity,
  getActivities,
} = require("../Controllers/activityController");

const addActivityHandler = async (req, res) => {
  try {
    await addActivity(req, res);
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

const getActivityHandler = async (req, res) => {
  try {
    await getActivities(req, res);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error);
  }
};

module.exports = {
  addActivityHandler,
  getActivityHandler,
};

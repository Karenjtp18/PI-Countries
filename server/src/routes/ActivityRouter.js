const { Router } = require("express");
const activtyrouter = Router();
const {
  addActivityHandler,
  getActivityHandler,
} = require("../Handlers/ActivityHandlers");

activtyrouter.get("/activities", getActivityHandler);

activtyrouter.post("/activities", addActivityHandler);

module.exports = activtyrouter;

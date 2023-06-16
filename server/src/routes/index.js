const { Router } = require("express");
const activtyrouter = require("./ActivityRouter");
const countryrouter = require("./CountryRouter");

const router = Router();

router.use("/", countryrouter);
router.use("/", activtyrouter);

module.exports = router;

const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const logoutAdmin = require("../controllers/logout");

router.route("/").post(auth, logoutAdmin);

module.exports = router
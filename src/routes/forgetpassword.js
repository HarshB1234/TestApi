const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const {emailid, otp, resetPass} = require("../controllers/forgetpassword")

router.route("/").post(emailid);
router.route("/:email").post(auth, otp);
router.route("/reset/:email").post(auth, resetPass);

module.exports = router
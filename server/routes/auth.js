const express = require("express");

const {exerciseDataPost,exerciseDataGet, deleteActivity} = require("../controllers/auth")
var router = express.Router();
router.route("/activitydata").post(exerciseDataPost)
router.route("/").get(exerciseDataGet)
router.route("/:id").delete(deleteActivity)
module.exports = router
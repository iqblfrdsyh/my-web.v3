const express = require("express");
const router = express.Router();

const {
  getAllSosmed,
  createSosmed,
} = require("../controllers/sosmed.controller");

router.get("/sosmeds", getAllSosmed);
router.post("/sosmed/create/:userId", createSosmed);

module.exports = router;

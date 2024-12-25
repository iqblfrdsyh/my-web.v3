const express = require("express");

const router = express.Router();
const {
  getDataCtf,
  createCtf,
  deleteCtf,
} = require("../controllers/certificate.controller.js");

router.get("/certificates", getDataCtf);
router.post("/certificate/create/:userId", createCtf);
router.delete("/certificate/delete", deleteCtf);

module.exports = router;

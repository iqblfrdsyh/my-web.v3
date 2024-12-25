const express = require("express");
const router = express.Router();

const {
  getAllTech,
  createTech,
} = require("../controllers/techStack.controller");

router.get("/techStacks", getAllTech);
router.post("/techStack/create/:projectId", createTech);

module.exports = router;

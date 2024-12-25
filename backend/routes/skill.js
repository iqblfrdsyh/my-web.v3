const express = require("express");
const router = express.Router();

const {
  createSkill,
  deleteSkill,
  getDataSkill,
} = require("../controllers/skill.controller");

router.get("/skills", getDataSkill);
router.post("/skill/create/:userId", createSkill);
router.delete("/skill/delete", deleteSkill);

module.exports = router;

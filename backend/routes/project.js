const express = require("express");

const router = express.Router();
const {
  getDataProject,
  createProject,
  deleteProject,
} = require("../controllers/project.controllers");

router.get("/projects", getDataProject);
router.post("/project/create/:userId", createProject);
router.delete("/project/delete", deleteProject);

module.exports = router;

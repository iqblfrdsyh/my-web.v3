const express = require("express");

const router = express.Router();
const {
  getData,
  createData,
  updateData,
  deleteData,
} = require("../controllers/user.controller");

router.get("/user", getData);
router.post("/user/create", createData);
router.put("/user/update", updateData);
router.delete("/user/delete", deleteData);

module.exports = router;

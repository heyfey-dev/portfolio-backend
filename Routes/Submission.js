const express = require("express");
const router = express.Router();
const {
  getSubmissions,
  createSubmission,
  updateSubmission,
  deleteSubmission,
} = require("../Controller/submission");

// Routes
router.get("/", getSubmissions);
router.post("/", createSubmission);
router.put("/:id", updateSubmission);
router.delete("/:id", deleteSubmission);

module.exports = router;

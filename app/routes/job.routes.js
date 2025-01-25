const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");

// Create a new job
router.post("/", jobController.createJob);

// Get all jobs
router.get("/", jobController.getAllJobs);

// Get job by ID
router.get("/:id", jobController.getJobById);

// Update job by ID
router.put("/:id", jobController.updateJobById);

// Delete job by ID
router.delete("/:id", jobController.deleteJobById);

module.exports = router;

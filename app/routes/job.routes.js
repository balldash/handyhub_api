const express = require("express");
const router = express.Router();
const jobController = require("../controllers/job.controller");
const { authenticate } = require('../middlewares/auth.middleware');


router.post("/", authenticate, jobController.createJob);
router.get("/", authenticate, jobController.getAllJobs);
router.get("/:id", authenticate, jobController.getJobById);
router.put("/:id", authenticate, jobController.updateJobById);
router.delete("/:id", authenticate, jobController.deleteJobById);

module.exports = router;

const jobService = require("../services/job.service");

module.exports = {
  async createJob(req, res) {
    try {
      const job = await jobService.create(req.body);
      return res.status(201).json(job);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getAllJobs(req, res) {
    try {
      const jobs = await jobService.getAll();
      return res.status(200).json(jobs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getJobById(req, res) {
    try {
      const job = await jobService.getById(req.params.id);
      if (!job) return res.status(404).json({ message: "Job not found" });
      return res.status(200).json(job);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async updateJobById(req, res) {
    try {
      const updatedJob = await jobService.update(req.params.id, req.body);
      if (!updatedJob)
        return res.status(404).json({ message: "Job not found" });
      return res.status(200).json(updatedJob);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async deleteJobById(req, res) {
    try {
      const deleted = await jobService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Job not found" });
      return res.status(200).json({ message: "Job deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

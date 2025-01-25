const { Job } = require("../../models");

module.exports = {
  async create(data) {
    return await Job.create(data);
  },

  async getAll() {
    return await Job.findAll();
  },

  async getById(id) {
    return await Job.findByPk(id);
  },

  async update(id, data) {
    const job = await Job.findByPk(id);
    if (!job) return null;
    return await job.update(data);
  },

  async delete(id) {
    const job = await Job.findByPk(id);
    if (!job) return null;
    await job.destroy();
    return true;
  },
};

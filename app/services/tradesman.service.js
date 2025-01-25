const { Tradesman } = require("../../models");

module.exports = {
  async create(data) {
    return await Tradesman.create(data);
  },

  async getAll() {
    return await Tradesman.findAll();
  },

  async getById(id) {
    return await Tradesman.findByPk(id);
  },

  async update(id, data) {
    const tradesman = await Tradesman.findByPk(id);
    if (!tradesman) return null;
    return await tradesman.update(data);
  },

  async delete(id) {
    const tradesman = await Tradesman.findByPk(id);
    if (!tradesman) return null;
    await tradesman.destroy();
    return true;
  },
};

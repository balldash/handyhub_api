const { Client } = require("../../models");

module.exports = {
  async create(data) {
    return await Client.create(data);
  },

  async getAll() {
    return await Client.findAll();
  },

  async getById(id) {
    return await Client.findByPk(id);
  },

  async update(id, data) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    return await client.update(data);
  },

  async delete(id) {
    const client = await Client.findByPk(id);
    if (!client) return null;
    await client.destroy();
    return true;
  },
};

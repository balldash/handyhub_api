const { Offer } = require("../../models");

module.exports = {
  async create(data) {
    return await Offer.create(data);
  },

  async getAll() {
    return await Offer.findAll();
  },

  async getById(id) {
    return await Offer.findByPk(id);
  },

  async update(id, data) {
    const offer = await Offer.findByPk(id);
    if (!offer) return null;
    return await offer.update(data);
  },

  async delete(id) {
    const offer = await Offer.findByPk(id);
    if (!offer) return null;
    await offer.destroy();
    return true;
  },
};

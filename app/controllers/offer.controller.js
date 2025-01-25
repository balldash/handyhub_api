const offerService = require("../services/offer.service");

module.exports = {
  async createOffer(req, res) {
    try {
      const offer = await offerService.create(req.body);
      return res.status(201).json(offer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getAllOffers(req, res) {
    try {
      const offers = await offerService.getAll();
      return res.status(200).json(offers);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async getOfferById(req, res) {
    try {
      const offer = await offerService.getById(req.params.id);
      if (!offer) return res.status(404).json({ message: "Offer not found" });
      return res.status(200).json(offer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async updateOfferById(req, res) {
    try {
      const updatedOffer = await offerService.update(req.params.id, req.body);
      if (!updatedOffer)
        return res.status(404).json({ message: "Offer not found" });
      return res.status(200).json(updatedOffer);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  async deleteOfferById(req, res) {
    try {
      const deleted = await offerService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Offer not found" });
      return res.status(200).json({ message: "Offer deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

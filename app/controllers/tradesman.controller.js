const tradesmanService = require("../services/tradesman.service");

module.exports = {
  async createTradesman(req, res) {
    try {
      const tradesman = await tradesmanService.create(req.body);
      res.status(201).json(tradesman);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create tradesman" });
    }
  },

  async getAllTradesmen(req, res) {
    try {
      const tradesmen = await tradesmanService.getAll();
      res.status(200).json(tradesmen);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch tradesmen" });
    }
  },

  async getTradesmanById(req, res) {
    try {
      const tradesman = await tradesmanService.getById(req.params.id);
      if (!tradesman) {
        return res.status(404).json({ error: "Tradesman not found" });
      }
      res.status(200).json(tradesman);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch tradesman" });
    }
  },

  async updateTradesman(req, res) {
    try {
      const updatedTradesman = await tradesmanService.update(
        req.params.id,
        req.body
      );
      if (!updatedTradesman) {
        return res.status(404).json({ error: "Tradesman not found" });
      }
      res.status(200).json(updatedTradesman);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to update tradesman" });
    }
  },

  async deleteTradesman(req, res) {
    try {
      const deleted = await tradesmanService.delete(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Tradesman not found" });
      }
      res.status(200).json({ message: "Tradesman deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to delete tradesman" });
    }
  },
};

const clientService = require("../services/client.service");

module.exports = {
  async createClient(req, res) {
    try {
      const client = await clientService.create(req.body);
      return res.status(201).json(client);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while creating the client" });
    }
  },

  async getAllClients(req, res) {
    try {
      const clients = await clientService.getAll();
      return res.status(200).json(clients);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while fetching clients" });
    }
  },

  async getClientById(req, res) {
    try {
      const client = await clientService.getById(req.params.id);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json(client);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while fetching the client" });
    }
  },

  async updateClient(req, res) {
    try {
      const client = await clientService.update(req.params.id, req.body);
      if (!client) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json(client);
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while updating the client" });
    }
  },

  async deleteClient(req, res) {
    try {
      const success = await clientService.delete(req.params.id);
      if (!success) {
        return res.status(404).json({ error: "Client not found" });
      }
      return res.status(200).json({ message: "Client deleted successfully" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "An error occurred while deleting the client" });
    }
  },
};

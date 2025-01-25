const authService = require("../services/auth.service");

module.exports = {
  async signup(req, res) {
    try {
      const { userType } = req.body;
      if (!["tradesman", "client"].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type" });
      }

      const { user, token } = await authService.signup(req.body, userType);
      res.status(201).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },

  async login(req, res) {
    try {
      const { email, password, userType } = req.body;
      if (!["tradesman", "client"].includes(userType)) {
        return res.status(400).json({ error: "Invalid user type" });
      }

      const { user, token } = await authService.login(
        email,
        password,
        userType
      );
      res.status(200).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  },
};

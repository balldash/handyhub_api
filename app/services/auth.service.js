const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const tradesmanService = require("./tradesman.service");
const clientService = require("./client.service");

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

module.exports = {
  async signup(data, userType) {
    const { email, password, ...rest } = data;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Use the respective service to create the user
    let user;
    if (userType === "tradesman") {
      user = await tradesmanService.create({
        email,
        passwordHash: hashedPassword,
        ...rest,
      });
    } else if (userType === "client") {
      user = await clientService.create({
        email,
        passwordHash: hashedPassword,
        ...rest,
      });
    } else {
      throw new Error("Invalid user type");
    }

    // Generate a JWT
    const token = jwt.sign({ id: user.id, userType }, SECRET_KEY, {
      expiresIn: "1d",
    });

    return { user, token };
  },

  async login(email, password, userType) {
    const service = userType === "tradesman" ? tradesmanService : clientService;

    // Find user by email
    const user = await service.findByEmail(email);
    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }

    // Generate a JWT
    const token = jwt.sign({ id: user.id, userType }, SECRET_KEY, {
      expiresIn: "1d",
    });

    return { user, token };
  },
};

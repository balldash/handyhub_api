const { Tradesman } = require("../../models");
const tradesmanService = require("../../app/services/tradesman.service");

jest.mock("../../models", () => ({
  Tradesman: {
    create: jest.fn(),
    findAll: jest.fn(),
    findByPk: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn(),
  },
}));

describe("Tradesman Service", () => {
  const mockTradesman = {
    id: 1,
    firstName: "Jane",
    lastName: "Doe",
    dob: "1985-05-15",
    nrc: "AB123456",
    photo: "https://example.com/photo.jpg",
    email: "janedoe@email.com",
    phone: "123-456-7890",
    specialization: "Electrician",
    passwordHash: "hashedpassword123",
    update: jest.fn(),
    destroy: jest.fn().mockResolvedValue(true)
  };

  it("should create a new tradesman", async () => {
    Tradesman.create.mockResolvedValue(mockTradesman); // Mock the return value

    const result = await tradesmanService.create(mockTradesman); // Call the service method
    expect(result).toHaveProperty("id");
    expect(result.firstName).toBe("Jane");
  });

  it("should fetch all tradesmen", async () => {
    Tradesman.findAll.mockResolvedValue([mockTradesman]);

    const result = await tradesmanService.getAll();
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Jane");
  });

  it("should fetch a specific tradesman", async () => {
    Tradesman.findByPk.mockResolvedValue(mockTradesman);

    const result = await tradesmanService.getById(1);
    expect(result.firstName).toBe("Jane");
  });

  it("should update a tradesman", async () => {
    // Mocking the update method to return the updated tradesman
    Tradesman.findByPk.mockResolvedValue(mockTradesman);
    mockTradesman.update.mockResolvedValue([
      1,
      [{ ...mockTradesman, phone: "987-654-3210" }],
    ]); // Update phone number

    const result = await tradesmanService.update(1, { phone: "987-654-3210" });
    expect(result[1][0].phone).toBe("987-654-3210"); // Expect the updated phone number
  });


  it("should return null if tradesman is not found for update", async () => {
    Tradesman.findByPk.mockResolvedValue(null); // Simulate not finding the tradesman

    const result = await tradesmanService.update(999, {
      phone: "987-654-3210",
    });
    expect(result).toBeNull();
  });

  it("should return null if tradesman is not found for delete", async () => {
    Tradesman.findByPk.mockResolvedValue(null); // Simulate not finding the tradesman

    const result = await tradesmanService.delete(999);
    expect(result).toBeNull();
  });

  it("should delete a tradesman", async () => {
    // Mocking the destroy method
    Tradesman.findByPk.mockResolvedValue(mockTradesman);
    Tradesman.destroy.mockResolvedValue(true); // Simulate successful deletion

    const result = await tradesmanService.delete(1);
    expect(result).toBe(true); // Expect the result to be true
  });

});

jest.mock('../../models', () => require('../__mocks__/models.js'));

const { Tradesman } = require("../__mocks__/models.js");

describe("Tradesman Model", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mocks before each test
  });

  it("should create a Tradesman", async () => {
    // Mock the response for Tradesman.create
    Tradesman.create.mockResolvedValue({
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    });

    const tradesman = await Tradesman.create({
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    });

    expect(Tradesman.create).toHaveBeenCalledTimes(1);
    expect(tradesman.firstName).toBe("John");
  });

  it("should fetch all Tradesmen", async () => {
    // Mock the response for Tradesman.findAll
    Tradesman.findAll.mockResolvedValue([
      { id: 1, firstName: "Alice" },
      { id: 2, firstName: "Bob" },
    ]);

    const tradesmen = await Tradesman.findAll();

    expect(Tradesman.findAll).toHaveBeenCalledTimes(1);
    expect(tradesmen.length).toBe(2);
  });
});


describe("Tradesman Model Associations", () => {
  it("should fetch Tradesman with Address", async () => {
    const tradesman = await Tradesman.findByPk(1);
    const address = await tradesman.getAddress();

    expect(tradesman.firstName).toBe("John");
    expect(address.street).toBe("Main Street");
  });
});

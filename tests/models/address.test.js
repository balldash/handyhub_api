jest.mock("../../models", () => require("../__mocks__/models.js"));

const { Address } = require("../__mocks__/models.js");

describe("Address Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create an Address with valid data", async () => {
    Address.create.mockResolvedValue({
      id: 1,
      plotNumber: 101,
      street: "Main Street",
      area: "Downtown",
      city: "Lusaka",
      postalCode: 12345,
    });

    const address = await Address.create({
      plotNumber: 101,
      street: "Main Street",
      area: "Downtown",
      city: "Lusaka",
      postalCode: 12345,
    });

    expect(Address.create).toHaveBeenCalledTimes(1);
    expect(address.street).toBe("Main Street");
  });

  it("should fetch all Addresses", async () => {
    Address.findAll.mockResolvedValue([
      { id: 1, street: "Main Street" },
      { id: 2, street: "Elm Street" },
    ]);

    const addresses = await Address.findAll();

    expect(Address.findAll).toHaveBeenCalledTimes(1);
    expect(addresses.length).toBe(2);
    expect(addresses[1].street).toBe("Elm Street");
  });
});

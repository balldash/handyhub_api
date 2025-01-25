jest.mock("../../models", () => require("../__mocks__/models.js"));

const { Client } = require("../__mocks__/models.js");

describe("Client Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a Client with valid data", async () => {
    Client.create.mockResolvedValue({
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
    });

    const client = await Client.create({
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
    });

    expect(Client.create).toHaveBeenCalledTimes(1);
    expect(client.firstName).toBe("Alice");
    expect(client.email).toBe("alice@example.com");
  });

  it("should fetch all Clients", async () => {
    Client.findAll.mockResolvedValue([
      { id: 1, firstName: "Alice" },
      { id: 2, firstName: "Bob" },
    ]);

    const clients = await Client.findAll();

    expect(Client.findAll).toHaveBeenCalledTimes(1);
    expect(clients.length).toBe(2);
    expect(clients[1].firstName).toBe("Bob");
  });
});

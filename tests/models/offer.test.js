jest.mock("../../models", () => require("../__mocks__/models.js"));

const { Offer } = require("../__mocks__/models.js");

describe("Offer Model", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create an Offer with valid data", async () => {
    Offer.create.mockResolvedValue({
      id: 1,
      tradeId: 1,
      tradesmanId: 1,
      userId: 1,
      amount: 200,
      message: "I can do this job for $200",
    });

    const offer = await Offer.create({
      tradeId: 1,
      tradesmanId: 1,
      userId: 1,
      amount: 200,
      message: "I can do this job for $200",
    });

    expect(Offer.create).toHaveBeenCalledTimes(1);
    expect(offer.amount).toBe(200);
    expect(offer.message).toBe("I can do this job for $200");
  });

  it("should fetch all Offers", async () => {
    Offer.findAll.mockResolvedValue([
      { id: 1, amount: 200 },
      { id: 2, amount: 300 },
    ]);

    const offers = await Offer.findAll();

    expect(Offer.findAll).toHaveBeenCalledTimes(1);
    expect(offers.length).toBe(2);
    expect(offers[0].amount).toBe(200);
  });
});

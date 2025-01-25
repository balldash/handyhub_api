const mockTradesman = {
  create: jest.fn(),
  findByPk: jest.fn(() =>
    Promise.resolve({
      id: 1,
      firstName: "John",
      getAddress: jest.fn(() =>
        Promise.resolve({
          id: 1,
          street: "Main Street",
          area: "Downtown",
          city: "Lusaka",
          postalCode: 12345,
        })
      ),
    })
  ),
  findAll: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
};

const mockAddress = {
  create: jest.fn(),
  findByPk: jest.fn(),
  findAll: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
};

const mockJob = {
  create: jest.fn(),
  findByPk: jest.fn(() =>
    Promise.resolve({
      id: 1,
      title: "Fix Plumbing",
      location: "123 Main St",
      specialization: "Plumber",
      budget: 500,
    })
  ),
  findAll: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
};

const mockOffer = {
  create: jest.fn(),
  findByPk: jest.fn(() =>
    Promise.resolve({
      id: 1,
      tradeId: 1,
      tradesmanId: 1,
      userId: 1,
      amount: 200,
      message: "I can do this job for $200",
    })
  ),
  findAll: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
};

const mockClient = {
  create: jest.fn(),
  findByPk: jest.fn(() =>
    Promise.resolve({
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      email: "alice@example.com",
    })
  ),
  findAll: jest.fn(),
  update: jest.fn(),
  destroy: jest.fn(),
};

module.exports = {
  Tradesman: mockTradesman,
  Address: mockAddress,
  Job: mockJob,
  Offer: mockOffer,
  Client: mockClient,
  sequelize: {
    authenticate: jest.fn(),
    close: jest.fn(),
  },
};

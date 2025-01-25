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

module.exports = {
  Tradesman: mockTradesman,
  Address: mockAddress,
  sequelize: {
    authenticate: jest.fn(),
    close: jest.fn(),
  },
};

// src/__mocks__/mysql2.js
const mysql = {
  createPool: () => ({
    query: jest.fn().mockResolvedValue([[], []]),
    end: jest.fn().mockResolvedValue(),
  }),
};

export default mysql;
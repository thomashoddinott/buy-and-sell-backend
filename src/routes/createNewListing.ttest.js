// jest.mock('../database.js');
// jest.mock('uuid');
// jest.mock('mysql2/promise');


// import { createNewListingRoute } from '../routes/createNewListing.js';
// import { db } from '../database.js';
// import { v4 as uuidv4 } from 'uuid';

// describe('createNewListingRoute', () => {
//   const h = {
//     response: jest.fn((obj) => ({
//       code: jest.fn().mockReturnValue(obj),
//     })),
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   it('creates a new listing successfully', async () => {
//     db.query.mockResolvedValue([[{ affectedRows: 1 }]]);

//     const payload = { name: 'Test', description: 'Test desc', price: 100 };
//     const request = { payload };

//     const result = await createNewListingRoute.handler(request, h);

//     expect(uuidv4).toHaveBeenCalled();
//     expect(db.query).toHaveBeenCalledWith(
//       expect.any(String),
//       ['mocked-uuid', payload.name, payload.description, payload.price, '12345']
//     );
//     expect(h.response).toHaveBeenCalledWith({
//       id: 'mocked-uuid',
//       name: payload.name,
//       description: payload.description,
//       price: payload.price,
//       userId: '12345',
//       views: 0,
//     });
//     expect(h.response().code).toHaveBeenCalledWith(201);
//   });

//   it('returns 500 on DB error', async () => {
//     db.query.mockRejectedValue(new Error('DB failure'));

//     const payload = { name: 'Test', description: 'Test desc', price: 100 };
//     const request = { payload };

//     const result = await createNewListingRoute.handler(request, h);

//     expect(result).toEqual({ error: 'Failed to create listing' });
//     expect(h.response().code).toHaveBeenCalledWith(500);
//   });
// });

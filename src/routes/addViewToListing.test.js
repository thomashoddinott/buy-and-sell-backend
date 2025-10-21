jest.mock('../database.js');
jest.mock('mysql2/promise');

import { addViewToListingRoute } from './addViewToListing.js';
import mockListings from '../../__mocks__/listingsData.js';
import { db } from '../database.js';


describe('addViewToListingRoute', () => {
  const h = {
    response: jest.fn((obj) => ({
      code: jest.fn().mockReturnValue(obj),
    })),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('increments views', async () => {
    const listing = { ...mockListings[0] };
    const id = listing.id;

    db.query.mockResolvedValueOnce([{ affectedRows: 1 }]);
    db.query.mockResolvedValueOnce([[{ ...listing, views: listing.views + 1 }]]);

    const request = { params: { id } };
    const result = await addViewToListingRoute.handler(request, h);

    expect(db.query).toHaveBeenCalledTimes(2);
    expect(result).toEqual(expect.objectContaining({ ...listing, views: listing.views + 1 }));
  });
});

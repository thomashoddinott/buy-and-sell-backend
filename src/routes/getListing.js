import Boom from "@hapi/boom";
import { db } from "../database.js";

export const getListingRoute = {
  method: "GET",   
  path: "/api/listings/{id}",
  handler: async (request, h) => {
    const { id } = request.params;
    try {
      const [rows] = await db.query(
        'SELECT * FROM listings WHERE id = ?',
        [id]
      );
      
      if (!rows || rows.length === 0) {
        throw Boom.notFound("Listing not found");
      }
      
      return rows[0];
    } catch (error) {
      console.error('Error fetching listing:', error);
      throw Boom.internal('Failed to fetch listing');
    }
  },         
}
import { db } from "../database.js";

export const getAllListingsRoute = {
  method: "GET",
  path: "/api/listings",
  handler: async (request, h) => {
    try {
      const [rows] = await db.query("SELECT * FROM listings");
      console.log('Query results:', rows);
      if (!rows || rows.length === 0) {
        return h.response({ message: "No listings found" }).code(404);
      }
      return h.response(rows).code(200); // Explicitly return a Hapi response
    } catch (err) {
      console.error("Error fetching listings:", err);
      return h.response({ error: "Failed to fetch listings" }).code(500);
    }
  },
};
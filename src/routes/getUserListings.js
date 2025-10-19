import { db } from "../database.js";

export const getUserListingsRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (request, h) => {
    try {
      const { userId } = request.params;
      const [rows] = await db.query(
        'SELECT * FROM listings WHERE user_id = ?',
        [userId]
      );
      
      return h.response(rows).code(200);
    } catch (error) {
      console.error('Error fetching user listings:', error);
      return h.response({ error: "Failed to fetch user listings" }).code(500);
    }
  },
};  
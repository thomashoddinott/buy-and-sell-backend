import {db} from "../database.js";

export const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (request, h) => {
    const { id } = request.params;
    try {
      // First, update the view count
      const [updateResult] = await db.query(
        'UPDATE listings SET views = views + 1 WHERE id = ?',
        [id]
      );

      if (updateResult.affectedRows === 0) {
        return h.response({ message: "Listing not found" }).code(404);
      }

      // Then fetch the updated listing
      const [rows] = await db.query(
        'SELECT * FROM listings WHERE id = ?',
        [id]
      );

      return h.response(rows[0]).code(200);
    } catch (error) {
      console.error('Error adding view to listing:', error);
      return h.response({ error: "Failed to add view" }).code(500);
    }
  },
};  
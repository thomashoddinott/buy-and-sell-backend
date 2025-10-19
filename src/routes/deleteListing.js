import { db } from "../database.js";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (request, h) => {
    const { id } = request.params;
    
    try {
      // First check if the listing exists
      const [existingListing] = await db.query(
        'SELECT * FROM listings WHERE id = ?',
        [id]
      );

      if (!existingListing || existingListing.length === 0) {
        return h.response({ message: "Listing not found" }).code(404);
      }

      // Delete the listing
      const [deleteResult] = await db.query(
        'DELETE FROM listings WHERE id = ?',
        [id]
      );

      if (deleteResult.affectedRows === 0) {
        return h.response({ message: "Failed to delete listing" }).code(500);
      }

      return h.response({ message: "Listing deleted successfully" }).code(200);
    } catch (error) {
      console.error('Error deleting listing:', error);
      return h.response({ error: "Failed to delete listing" }).code(500);
    }
  },
};
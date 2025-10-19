import { db } from "../database.js";

export const updateListingRoute = {
  method: "PUT",
  path: "/api/listings/{id}",
  handler: async (request, h) => {
    const { id } = request.params;
    const { name, description, price } = request.payload;
    
    try {
      // First check if the listing exists and get the current data
      const [existingListing] = await db.query(
        'SELECT * FROM listings WHERE id = ?',
        [id]
      );

      if (!existingListing || existingListing.length === 0) {
        return h.response({ message: "Listing not found" }).code(404);
      }

      // Update only the fields that were provided
      const updates = {
        name: name || existingListing[0].name,
        description: description || existingListing[0].description,
        price: price ?? existingListing[0].price, // Use nullish coalescing to allow price of 0
      };

      // Perform the update
      const [updateResult] = await db.query(
        `UPDATE listings 
         SET name = ?, description = ?, price = ?
         WHERE id = ?`,
        [updates.name, updates.description, updates.price, id]
      );

      if (updateResult.affectedRows === 0) {
        return h.response({ message: "Failed to update listing" }).code(500);
      }

      // Fetch and return the updated listing
      const [updatedListing] = await db.query(
        'SELECT * FROM listings WHERE id = ?',
        [id]
      );

      return h.response(updatedListing[0]).code(200);
    } catch (error) {
      console.error('Error updating listing:', error);
      return h.response({ error: "Failed to update listing" }).code(500);
    }
  },
};
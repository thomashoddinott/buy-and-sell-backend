import { v4 as uuidv4 } from "uuid";
import { db } from "../database.js";

export const createNewListingRoute = {
  method: "POST",
  path: "/api/listings",
  handler: async (request, h) => {
    const {
      name = "",
      description = "",
      price = 0,
    } = request.payload;
    const userId = "12345"; // Temporary hardcoded user ID for testing
    const id = uuidv4();
    try {
      const [result] = await db.query(
        "INSERT INTO listings (id, name, description, price, user_id, views) VALUES (?, ?, ?, ?, ?, 0)",
        [id, name, description, price, userId]
      );

      return h
        .response({ id, name, description, price, userId, views: 0 })
        .code(201);
    } catch (error) {
      console.error("Error creating new listing:", error);
      return h.response({ error: "Failed to create listing" }).code(500);
    }
  },
};

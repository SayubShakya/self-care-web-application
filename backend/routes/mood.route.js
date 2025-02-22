import express from "express";
import {
    getMoods,
    createMood,
    updateMood,
    deleteMood,
} from "../controllers/mood.controller.js";

const router = express.Router();

// Routes for moods
router.get("/", getMoods); // Get all mood entries
router.post("/", createMood); // Create a new mood entry
router.put("/:id", updateMood); // Update a mood entry by ID
router.delete("/:id", deleteMood); // Delete a mood entry by ID

export default router; // Ensure this line is present
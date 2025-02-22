import express from "express";
import {
    getSchedules,
    createSchedule,
    updateSchedule,
    deleteSchedule,
} from "../controllers/schedule.controller.js";

const router = express.Router();

// Routes for schedules
router.get("/", getSchedules); // Get all schedules
router.post("/", createSchedule); // Create a new schedule
router.put("/:id", updateSchedule); // Update a schedule by ID
router.delete("/:id", deleteSchedule); // Delete a schedule by ID

export default router;
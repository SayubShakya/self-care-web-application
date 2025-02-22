import mongoose from "mongoose";
import Schedule from "../models/schedule.model.js";

// Get all schedules
export const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find({});
        res.status(200).json({ success: true, data: schedules });
    } catch (error) {
        console.error("Error in fetching schedules:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new schedule
export const createSchedule = async (req, res) => {
    const schedule = req.body;

    // Validate required fields
    if (
        !schedule.userId ||
        !schedule.date ||
        !schedule.recommendedSchedule ||
        !schedule.personalizedSchedule
    ) {
        return res.status(400).json({ success: false, message: "Please provide all the fields" });
    }

    const newSchedule = new Schedule(schedule);

    try {
        await newSchedule.save();
        res.status(201).json({ success: true, data: newSchedule });
    } catch (error) {
        console.error("Error in creating schedule:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a schedule
export const updateSchedule = async (req, res) => {
    const { id } = req.params;
    const schedule = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Schedule Id" });
    }

    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(id, schedule, { new: true });
        res.status(200).json({ success: true, data: updatedSchedule });
    } catch (error) {
        console.error("Error in updating schedule:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a schedule
export const deleteSchedule = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Schedule Id" });
    }

    try {
        await Schedule.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Schedule deleted" });
    } catch (error) {
        console.error("Error in deleting schedule:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
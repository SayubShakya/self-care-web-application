import mongoose from "mongoose";
import Mood from "../models/mood.model.js";

// Get all mood entries
export const getMoods = async (req, res) => {
    try {
        const moods = await Mood.find({});
        res.status(200).json({ success: true, data: moods });
    } catch (error) {
        console.error("Error in fetching mood entries:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Create a new mood entry
export const createMood = async (req, res) => {
    const mood = req.body;

    // Validate required fields
    if (!mood.userId || !mood.date || !mood.emoji) {
        return res.status(400).json({ success: false, message: "Please provide userId, date, and emoji" });
    }

    const newMood = new Mood(mood);

    try {
        await newMood.save();
        res.status(201).json({ success: true, data: newMood });
    } catch (error) {
        console.error("Error in creating mood entry:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Update a mood entry
export const updateMood = async (req, res) => {
    const { id } = req.params;
    const mood = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Mood Id" });
    }

    try {
        const updatedMood = await Mood.findByIdAndUpdate(id, mood, { new: true });
        res.status(200).json({ success: true, data: updatedMood });
    } catch (error) {
        console.error("Error in updating mood entry:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Delete a mood entry
export const deleteMood = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Mood Id" });
    }

    try {
        await Mood.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Mood entry deleted" });
    } catch (error) {
        console.error("Error in deleting mood entry:", error.message);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
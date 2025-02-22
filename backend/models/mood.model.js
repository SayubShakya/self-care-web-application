import mongoose from "mongoose";

const moodSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User collection
            ref: "User", // Links to the User model
            required: true,
        },
        date: {
            type: Date, // Date of the mood entry
            required: true,
        },
        emoji: {
            type: String, // Emoji representing the mood (e.g., "😊")
            required: true,
        },
        moodDescription: {
            type: String, // Optional text description of the mood
            required: false, // Not required
        },
        reflection: {
            type: String, // User’s response to a reflective prompt
            required: false, // Not required
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Mood = mongoose.model("Mood", moodSchema);

export default Mood; // Ensure this line is present
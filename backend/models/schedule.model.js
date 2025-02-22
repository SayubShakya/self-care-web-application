import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the User collection
            ref: "User", // Links to the User model
            required: true,
        },
        date: {
            type: Date, // Date of the schedule
            required: true,
        },
        recommendedSchedule: {
            workingTime: {
                type: Number, // Recommended hours for working time
                required: true,
            },
            qualityTime: {
                type: Number, // Recommended hours for quality time
                required: true,
            },
            aloneTime: {
                type: Number, // Recommended hours for alone time
                required: true,
            },
            communityTime: {
                type: Number, // Recommended hours for community time
                required: true,
            },
        },
        personalizedSchedule: {
            workingTime: {
                type: Number, // Personalized hours for working time
                required: true,
            },
            qualityTime: {
                type: Number, // Personalized hours for quality time
                required: true,
            },
            aloneTime: {
                type: Number, // Personalized hours for alone time
                required: true,
            },
            communityTime: {
                type: Number, // Personalized hours for community time
                required: true,
            },
        },
        completedActivities: [
            {
                category: {
                    type: String, // Category of the activity (e.g., "workingTime")
                    required: true,
                },
                activity: {
                    type: String, // Description of the activity (e.g., "studied for 2 hours")
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

export default Schedule;
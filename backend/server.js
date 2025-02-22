import express from 'express';
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import scheduleRoutes from "./routes/schedule.route.js"; // Import schedule routes
import moodRoutes from "./routes/mood.route.js"; // Import mood routes



dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;


app.use(express.json());
app.use("/api/users",userRoutes);
app.use("/api/schedules", scheduleRoutes); // Schedule routes
app.use("/api/moods", moodRoutes); // Mood routes



app.listen(PORT, ()=>{
    connectDB();
    console.log('server started at http://localhost:'+PORT);


});
import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import scheduleRoutes from './routes/schedule.route.js'; // Import schedule routes
import moodRoutes from './routes/mood.route.js'; // Import mood routes
import cors from 'cors'; // Import the cors package

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes
app.use(
  cors({
    origin: 'http://localhost:5173', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/schedules', scheduleRoutes); // Schedule routes
app.use('/api/moods', moodRoutes); // Mood routes

// Handle preflight requests
app.options('*', cors()); // Enable preflight requests for all routes

// Start the server
app.listen(PORT, () => {
  connectDB(); // Connect to the database
  console.log(`Server started at http://localhost:${PORT}`);
});
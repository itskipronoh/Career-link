const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');
const userRoutes = require('./routes/UserRoutes');
const applicationRoutes = require('./routes/ApplicationRoutes');

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', jobRoutes);
app.use('/api', userRoutes);
app.use('/api', applicationRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

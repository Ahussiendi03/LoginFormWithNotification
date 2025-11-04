const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();


mongoose.connect(process.env.Mongo_URI)
.then(() => {console.log("Connected to MongoDB")})
.catch((err) => {console.error("MongoDB connection error:", err)});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>  {
    console.log(`Server is running on port ${PORT}`);
});
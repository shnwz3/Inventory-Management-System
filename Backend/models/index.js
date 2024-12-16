const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

// Access the MongoDB URI from the environment variables
const uri = process.env.DATABASE_URL;

function main() {
    mongoose.connect(uri).then(() => {
        console.log("Successfully connected to MongoDB");
    }).catch((err) => {
        console.log("Error connecting to MongoDB: ", err);
    });
}

module.exports = { main };

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

// app expressing itself
const app = express();

// Middleware for parsing request body
app.use(express.json());

// For importing env details
dotenv.config();

// Middleware for handling CORS POLICY
app.use(cors());

// makes all user routes active
app.use("/user", userRoutes);

// used to connect to database
async function connectToDatabase() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    app.listen(`${process.env.PORT}` || 5000, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// used to get a resource from our running {PORT} server
app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("The backend of an authentication ");
});

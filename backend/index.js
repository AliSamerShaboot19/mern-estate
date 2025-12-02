import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.rout.js";
import authRouter from "./routes/auth.rout.js";
import cors from "cors";
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((error) => {
    console.log("Error ", error);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Eroor";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

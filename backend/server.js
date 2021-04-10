import express from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import moduleRoutes from "./routes/moduleRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const __dirname = path.resolve();

app.use("/api/modules", moduleRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${
      process.env.NODE_ENV
    } mode on port ${PORT} path: ${path.resolve(
      __dirname,
      "frontend",
      "build",
      "index.html"
    )}`
  )
);

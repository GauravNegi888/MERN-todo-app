import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import router from "./routes/TaskRoutes.js";
import dns from 'dns'

dns.setServers(["1.1.1.1","8.8.8.8"])

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Todo API is running 🚀");
});

app.use("/api/tasks", router);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(PORT);
    });
  } catch (error) {
    console.log("Server failed", error.message);
    process.exit(1);
  }
};

startServer();

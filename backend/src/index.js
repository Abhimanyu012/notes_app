import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notes.route.js";
import dotenv from "dotenv";
import ConnectDb from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use("/api/notes", notesRoutes);

ConnectDb()

app.listen(PORT, () => {
  console.log("server is running on port :", PORT);
});

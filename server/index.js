const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const scoreRoutes = require("./routes/scoreRoutes");
const cors = require("cors");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/users", scoreRoutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

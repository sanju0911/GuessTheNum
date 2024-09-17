const express = require("express");
const connectDB = require("./config/db");
const userRoute = require("./routes/userRoutes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", userRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

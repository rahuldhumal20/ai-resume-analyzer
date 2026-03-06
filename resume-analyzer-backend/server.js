const express = require("express");
const cors = require("cors");

const app = express();
const resumeRoutes = require("./routes/resumeRoutes");

app.use(cors());
app.use(express.json());
app.use("/api/resume",resumeRoutes);

app.get("/", (req, res) => {
    res.send("AI Resume Analyzer API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
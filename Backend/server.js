const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Public")));

const usersRouter = require("./Routes/Users/users");
const jobsRouter = require("./Routes/Jobs/jobs");
const savedJobsRouter = require("./Routes/SavedJobs/savedJobs");
const appliedJobsRouter = require("./Routes/AppliedJobs/appliedJobs");
const uploadRouter = require("./Routes/Upload/upload")


app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);
app.use("/savedjobs", savedJobsRouter);
app.use("/appliedjobs", appliedJobsRouter);
app.use("/upload", uploadRouter)


// app.use((err, req, res, next) => {
//     console.log(err);
//     if (err.status) {
//     res.status(err.status).json(err);
//     } else {
//     res.status(500).json(err);
//     }
// });

app.listen(PORT, () => {
    console.log(`Port Listening Party: ${PORT}`);
})
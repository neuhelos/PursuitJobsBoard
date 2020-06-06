const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
require('dotenv').config();

const {upload} = require('./Utilities/multer')

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "Public")));

const usersRouter = require('./routes/users');
app.use("/api/users", usersRouter)

const usersRouter = require("./Routes/Users/Users");
const jobsRouter = require("./Routes/");
const savedJobsRouter = require("./Routes/Votes/Votes");
const appliedJobsRouter = require("./Routes/Hashtags/Hashtags");
const uploadRouter = require("./Routes/Upload/upload")

app.use("/users", usersRouter);
app.use("/jobs", jobsRouter);
app.use("/savedjobs", savedJobsRouter);
app.use("/appliedjobs", appliedJobsRouter);
app.use("/upload", uploadRouter)


app.use((err, req, res, next) => {
    console.log(err);
    if (err.status) {
    res.status(err.status).json(err);
    } else {
    res.status(500).json(err);
    }
});

app.listen(PORT, () => {
    console.log(`Port Listening Party: ${PORT}`);
})